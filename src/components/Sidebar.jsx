import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import Avatar from '../img/IMG_20210820_103631.jpg';

import '../styles/components/sidebar.sass';

function Sidebar() {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="foto-perfil" />
            <p className="title">Desenvolvedor</p>
            <SocialNetworks/>
            <InformationContainer />
            <a href="#" className="btn">
                Download currículo
            </a>
        </aside>
    )
}

export default Sidebar