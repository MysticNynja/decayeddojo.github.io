import React from 'react';

const Home = () => {
  return (
    <div>
      <p className="text-2xl leading-loose">
        The term 道場 (dōjō) on the Decayed Dojo site is used with a modern, stylized twist. Traditionally, 道場 refers to a “place of the way”—a training hall for martial arts or spiritual discipline. But here, it’s been reimagined as a digital hub for retro gaming culture and community.
      </p>
      <h2 className="text-4xl mt-8 mb-4 text-yellow-400">Featured Streamers:</h2>
      <ul className="list-disc list-inside text-2xl">
        <li>SxySamurai: An arcade brawler expert, echoing the dojo’s combat roots.</li>
        <li>MysticNynja: A stealth strategist, reinforcing the martial arts theme.</li>
      </ul>
      <p className="text-2xl mt-8 leading-loose">
        Dojo Spirit: The phrase “Dojo spirit—hosts, guides, and vibes” suggests mentorship, camaraderie, and shared passion—core values of a traditional dojo, now applied to gaming.
      </p>
      <p className="text-2xl mt-8 leading-loose">
        So in this context, 道場 is less about physical training and more about cultivating skill, style, and community in the digital realm. It’s a clever cultural remix: not old, just old school.
      </p>
    </div>
  );
};

export default Home;