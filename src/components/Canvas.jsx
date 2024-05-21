import React, { useRef, useEffect } from 'react';

const Canvas = ({ amount = 50 }) => {
    const canvasRef = useRef(null);
    const requestId = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const setCanvasSize = () => {
            const scale = window.devicePixelRatio; // Get the device's pixel ratio
            canvas.width = window.innerWidth * scale;
            canvas.height = window.innerHeight * scale;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(scale, scale); // Normalize coordinate system to use css pixels
        };

        function init() {
            if (requestId.current) {
                cancelAnimationFrame(requestId.current);
            }

            setCanvasSize();
            const points = generatePoints(amount);
            animate(points);
        }

        function generatePoints(count) {
            let points = [];
            for (let i = 0; i < count; i++) {
                const angle = Math.random() * 2 * Math.PI;
                points.push(new Point(
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerHeight,
                    Math.cos(angle) * 0.5,
                    Math.sin(angle) * 0.5
                ));
            }
            return points;
        }

        class Point {
            constructor(x, y, xSpeed, ySpeed) {
                this.x = x;
                this.y = y;
                this.xSpeed = xSpeed;
                this.ySpeed = ySpeed;
            }

            update() {
                this.x += this.xSpeed;
                this.y += this.ySpeed;
                if (this.x < 0 || this.x > window.innerWidth) this.xSpeed *= -1;
                if (this.y < 0 || this.y > window.innerHeight) this.ySpeed *= -1;
            }

            draw() {
                ctx.fillStyle = 'cyan';
                ctx.beginPath();
                ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI);
                ctx.fill();
            }
        }

        function animate(points) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            points.forEach(point => {
                point.update();
                point.draw();
            });
            connectPoints(points);
            requestId.current = requestAnimationFrame(() => animate(points));
        }

        function connectPoints(points) {
            points.forEach((point, index) => {
                for (let j = index + 1; j < points.length; j++) {
                    const otherPoint = points[j];
                    let distance = Math.sqrt((otherPoint.x - point.x) ** 2 + (otherPoint.y - point.y) ** 2);
                    if (distance < 210) {
                        ctx.beginPath();
                        ctx.moveTo(point.x, point.y);
                        ctx.lineTo(otherPoint.x, otherPoint.y);
                        ctx.strokeStyle = `rgba(0, 255, 255, ${1 - distance / 210})`;
                        ctx.stroke();
                    }
                }
            });
        }

        window.addEventListener('resize', init);
        init();

        return () => {
            window.removeEventListener('resize', init);
            if (requestId.current) {
                cancelAnimationFrame(requestId.current);
            }
        };
    }, [amount]); // Effect dependencies

    return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />;
};

export default Canvas;
