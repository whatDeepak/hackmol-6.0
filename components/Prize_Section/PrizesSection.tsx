import React from 'react';
import './PrizesSection.css';

interface PrizeCardProps {
  position: string;
  amount: string;
  color: string;
  iconSrc: string;
}

const PrizeCard: React.FC<PrizeCardProps> = ({ position, amount, color, iconSrc }) => {
  return (
    <div className="prize-card">
      <img src={iconSrc} alt={`${position} prize icon`} className="prize-icon" />
      <h3 className="prize-position" style={{ color }}>
        {position} PRIZE
      </h3>
      <p className="prize-amount">Rs. {amount}</p>
      <ul className="prize-benefits">
        <li>Goodies</li>
        <li>Geeks for Geeks (800/- INR coupon on all courses)</li>
        <li>Echo-ar Free premium tier services</li>
        <li>Online Mock Interviews from Interview Buddy</li>
        <li>Lifetime upgrades of Taskade Unlimited</li>
        <li>1 Year of 1Passwords Families</li>
        <li>3 months of Draftbit Starter</li>
        <li>Sashido Credits</li>
        <li>30 Days Free Receipt Credits</li>
      </ul>
    </div>
  );
};

const PrizesSection: React.FC = () => {
  return (
    <section className="prizes-section">
      {}
      <img src="/PrizeBackGround.png" alt="" className="bird-decoration bird-top-left" />
      <img src="/PrizeBackGround.png" alt="" className="bird-decoration bird-top-right" />
      <img src="/PrizeBackGround.png" alt="" className="bird-decoration bird-bottom-left" />
      <img src="/PrizeBackGround.png" alt="" className="bird-decoration bird-bottom-right" />
      
      <h2 className="prizes-title">PRIZES</h2>
      <div className="prizes-container">
        <PrizeCard 
          position="2ND" 
          amount="xxxxx" 
          color="#E0E0E0" 
          iconSrc="/2ndPrize.png" 
        />
        <PrizeCard 
          position="1ST" 
          amount="xxxxx" 
          color="#FFD700" 
          iconSrc="/1stPrize.png" 
        />
        <PrizeCard 
          position="3RD" 
          amount="xxxxx" 
          color="#CD7F32" 
          iconSrc="/3rdPrize.png" 
        />
      </div>
    </section>
  );
};
export default PrizesSection;