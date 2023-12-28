import ProjectsList from './ProjectsList.jsx';
import ProjectsTitle from './ProjectsTitle.jsx';

import Container from './Container.jsx';
import Navigation from './Navigation.jsx';

import LinkTo from './LinkTo.jsx';

export default function AboutProjects() {
    return (
        <Container>
            <ProjectsTitle></ProjectsTitle>
            <ProjectsList></ProjectsList>
            <Navigation
                elements={[<LinkTo url='/about/' text='<< Назад'></LinkTo>]}
            ></Navigation>
        </Container>
    );
}
