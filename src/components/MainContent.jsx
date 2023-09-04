import AboutContainer from './AboutContainer'
import ProjectContainer from './ProjectContainer'
import TechnologiesContainer from './TechnologiesContainer'

import '../styles/components/mainContent.sass'

function MainContent() {
    return (
        <main id='main-content'>
            <AboutContainer/>
            <TechnologiesContainer/>
            <ProjectContainer/>
        </main>
    )
}
 
export default MainContent