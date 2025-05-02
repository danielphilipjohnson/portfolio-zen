import SocialIcon from './SocialIcon';

const socialLinks = [
  {
    platform: 'devto' as const,
    username: 'danielphilipjohnson',
    url: 'https://dev.to/danielphilipjohnson'
  },
  {
    platform: 'hackerrank' as const,
    username: 'daniel_p_johnson',
    url: 'https://www.hackerrank.com/daniel_p_johnson'
  },
  {
    platform: 'codepen' as const,
    username: 'danielphilipjohnson',
    url: 'https://codepen.io/danielphilipjohnson'
  },
  {
    platform: 'stackoverflow' as const,
    username: 'daniel-philip-johnson',
    url: 'https://stackoverflow.com/users/13921677/daniel-philip-johnson'
  },
  {
    platform: 'freecodecamp' as const,
    username: 'daniel-philip-johnson',
    url: 'https://www.freecodecamp.org/daniel-philip-johnson'
  },
  {
    platform: 'github' as const,
    username: 'danielphilipjohnson',
    url: 'https://github.com/danielphilipjohnson'
  }
];

const SocialIcons = () => {
  return (
    <div className="flex flex-wrap space-x-4">
      {socialLinks.map((link) => (
        <SocialIcon
          key={link.platform}
          platform={link.platform}
          username={link.username}
          url={link.url}
        />
      ))}
    </div>
  );
};

export default SocialIcons; 