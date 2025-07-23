import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Socmed = () => {
    return (
        <>
        <div className="bg-[#e0e0e0] py-15">
            <div className="socmed-container m-auto w-[80%] flex justify-between">
                <div className="socmed-title">
                    <h1 className="max-w-[800px] text-xl font-bold">Follow me on Social Medias!</h1>
                </div>
                <div className="socmed-list">
                    <SocialMediaIcons />
                </div>
            </div>
        </div>
        </>
    )
}

export default Socmed

const SocialMediaIcons = () => {
  const iconStyle = {
    fontSize: '24px',
    transition: 'color 0.3s ease',
  };

  const links = [
    {
      icon: faXTwitter,
      href: 'https://x.com/paztg_motion',
      color: '#030712',
      label: 'Twitter',
    },
    {
      icon: faYoutube,
      href: 'https://youtube.com/c/PaztG',
      color: '#030712',
      label: 'YouTube',
    },
    {
      icon: faInstagram,
      href: 'https://instagram.com/paztg.motionworks',
      color: '#030712',
      label: 'Instagram',
    },
  ];

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {links.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'inherit' }}
          title={item.label}
        >
          <FontAwesomeIcon
            icon={item.icon}
            style={{
              ...iconStyle,
              color: item.color,
            }}
            className="hover:opacity-80"
          />
        </a>
      ))}
    </div>
  )
}