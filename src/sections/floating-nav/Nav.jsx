const Nav = ({ item }) => {
  const handleScrollLink = e => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <li className='nav-item'>
      <a
        href={item.link}
        onClick={handleScrollLink}
        className={window.location.hash === item.link ? 'active' : ''}
      >
        {item.icon}
        <span>{item.label}</span>
      </a>
    </li>
  );
};

export default Nav;
