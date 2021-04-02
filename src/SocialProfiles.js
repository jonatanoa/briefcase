import React, {Component}from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';


class SocialProfiles extends Component{
    render(){
        const {link, image} = this.props.socialProfiles;
        return (
            <div>
                <a href={link}>
                    <img src={image} alt='social-profile'/>
                </a>
            </div>
        )
    }
}

class SocialProfiles extends Component {
    render () {
        return (
            <div>
                <h2>Contact me</h2>
                <div>
                    {
                        SOCIAL_PROFILES.map(SOCIAL_PROFILES => {
                            return <SocialProfiles key={SOCIAL_PROFILES.id} socialProfiles={SOCIAL_PROFILES}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SocialProfiles;