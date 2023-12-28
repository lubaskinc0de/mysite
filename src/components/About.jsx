

import AboutFigure from './AboutFigure.jsx';
import AboutText from './AboutText.jsx';

import Container from './Container.jsx';
import Navigation from './Navigation.jsx';

import LinkTo from './LinkTo.jsx';

export default function About() {
    return (
        <Container>
            <AboutFigure></AboutFigure>
            <AboutText></AboutText>
            <Navigation
                elements={[
                    <LinkTo url='/projects/' text='Мои проекты!'></LinkTo>,
                    <LinkTo url='/followme/' text='Ссылки на меня!'></LinkTo>,
                ]}
            ></Navigation>
        </Container>
    );
}
