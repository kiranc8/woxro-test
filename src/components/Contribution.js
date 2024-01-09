import React from 'react'

const Contribution = () => {
  return (
    <div className='contribution-container'>
      <div className='contribution-header'>
        <p className='contribution-header-heading'>Our Contribution</p>
        <p className='contribution-header-detail'>
          Our core offering extends beyond mere profit generation; we emphasize
          the growth and active involvement of our user community. Collaborating
          with us represents an investment, rather than a mere expenditure. Our
          dedication to providing distinctive digital interactions guarantees
          unparalleled benefits for our clientele.
        </p>
      </div>
      <div className='contribution-details'>
        <div className='contribution-detail'>
          <p>5M</p>
          <span>Daily User Engagement</span>
        </div>
        <div className='contribution-detail'>
          <p>$500K</p>
          <span>Revenue Surge for a Platform</span>
        </div>
        <div className='contribution-detail'>
          <p>10X</p>
          <span>ROAS on all our marketing campaigns</span>
        </div>
      </div>
    </div>
  )
}

export default Contribution