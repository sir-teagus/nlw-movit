import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import sytles from '../styles/components/ExperienceBar.module.css';

export default function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round(currentExperience / experienceToNextLevel * 100);

    return (
        <header className={sytles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />

                <span className={sytles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
                    {currentExperience} xp
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
}