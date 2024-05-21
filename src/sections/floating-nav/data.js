import { AiFillHome, AiFillAppstore, AiFillMessage } from 'react-icons/ai';
import { BsPersonFill } from 'react-icons/bs';
import { MdHomeRepairService } from 'react-icons/md';

const data = [
    { id: 1, link: '#home', icon: <AiFillHome />, label: 'Home' },
    { id: 2, link: '#about', icon: <BsPersonFill />, label: 'About' },
    { id: 3, link: '#project', icon: <MdHomeRepairService />, label: 'Projects' },
    { id: 4, link: '#certificate', icon: <AiFillAppstore />, label: 'Certs' },
    { id: 5, link: '#contact', icon: <AiFillMessage />, label: 'Contact' }
];

export default data;
