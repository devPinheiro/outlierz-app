import './fourthSection.css';
import { connection } from 'utils/images';

function FourthSection() {
  return (
    <section className='fourth-section'>
      <div className='fourth-section--text'>
        <h4 className='sections-headings'>
          Grow your connections in our ecosystem of like minds.
        </h4>
        <p className='sections-body'>
          {/* We are building an ecosystem specifically for emerging talent and
          recruiters all around the world that are interested in emerging
          talent. Connect with like minds here, expand the reach of your network
          and discover new opportunities. */}
          Recruiters can follow, and track players they shortlist over a period
          of time ensuring a well-rounded perspective before eventually
          physically assessing players making the process of scouting for
          African talent more efficient, cost-effective and enhances the chances
          of unearthing the next football sensation with ease.
        </p>
      </div>

      <img src={connection} alt='' className='fourth-section--image' />
    </section>
  );
}

export default FourthSection;
