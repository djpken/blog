import LineIcon from './LineIcon';
import { Facebook, GitHub, Globe, Instagram, Linkedin } from 'react-feather';

interface Props {
  color?: string;
}

function SocialLinks(props: Props) {
  return <div className="flex lg:mt-4 opacity-70 items-center">
    <a
      href="https://kenhsu-portfolio.zeabur.app"
      target="_blank"
      rel="noreferrer">
      <Globe
        size={18}
        className="transition hover:text-zinc-500"
        color={props.color}/>
    </a>
    <a
      href="https://github.com/djpken"
      className="ml-4 transition hover:text-zinc-500"
      target="_blank"
      rel="noreferrer">
      <GitHub size={18} color={props.color}/>
    </a>
    <a
      href="https://www.linkedin.com/in/ken-hsu-portfolio"
      className="ml-4 transition hover:text-zinc-500"
      target="_blank"
      rel="noreferrer">
      <Linkedin size={18} color={props.color}/>
    </a>
    <a
      href="https://www.instagram.com/kunkun_laa/"
      className="ml-4 transition hover:text-zinc-500"
      target="_blank"
      rel="noreferrer">
      <Instagram size={18} color={props.color}/>
    </a>
    <a
      href="https://www.facebook.com/djpkendjpken"
      className="ml-4 transition hover:text-zinc-500"
      target="_blank"
      rel="noreferrer">
      <Facebook size={18} color={props.color}/>
    </a>
    <a
      href="https://line.me/ti/p/6i4El5f_dH"
      className="ml-4 transition hover:text-zinc-500"
      target="_blank"
      rel="noreferrer">
      <LineIcon color={props.color} size={20}/>
    </a>
  </div>;
}

export default SocialLinks;
