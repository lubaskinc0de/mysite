

import Container from './Container.jsx';
import Navigation from './Navigation.jsx';

import FollowMeLinks from './FollowMeLinks.jsx';
import FollowMeTitle from './FollowMeTitle.jsx';

import LinkTo from './LinkTo';

export default function FollowMe() {
    return (
        <Container>
            <FollowMeTitle></FollowMeTitle>
            <FollowMeLinks></FollowMeLinks>
            <Navigation
                elements={[<LinkTo url='/about/' text='<< Назад'></LinkTo>]}
            ></Navigation>
        </Container>
    );
}
