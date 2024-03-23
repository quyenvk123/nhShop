import "../../../stytes/client/homepage/services.css"

const Services = () => {
  return (
    <>
        {/* ===== services ===== */}
<div className="box_services">
  <div className="services_sup">
    <div className="services_icon">
      <img src="../../src/assets/img/trophy 1.png" alt='' />
    </div>
    <div className="support_text">
      <div className="services_text_heading">
        <h1>High Quality</h1>
      </div>
      <div className="services_text_desc">
        <p>crafted from top materials</p>
      </div>
    </div>
  </div>
  <div className="services_sup">
    <div className="services_icon">
      <img src="../../src/assets/img/guarantee.png" alt='' />
    </div>
    <div className="support_text">
      <div className="services_text_heading">
        <h1>Warranty Protection</h1>
      </div>
      <div className="services_text_desc">
        <p>Over 2 years</p>
      </div>
    </div>
  </div>
  <div className="services_sup">
    <div className="services_icon">
      <img src="../../src/assets/img/shipping.png" alt='' />
    </div>
    <div className="support_text">
      <div className="services_text_heading">
        <h1>Free Shipping</h1>
      </div>
      <div className="services_text_desc">
        <p>Order over 150 $</p>
      </div>
    </div>
  </div>
  <div className="services_sup">
    <div className="services_icon">
      <img src="../../src/assets/img/customer-support.png" alt='' />
    </div>
    <div className="services_text">
      <div className="services_text_heading">
        <h1>24 / 7 Support</h1>
      </div>
      <div className="services_text_desc">
        <p>Dedicated support</p>
      </div>
    </div>
  </div>
</div>
{/* ===== end services ===== */}

    </>
  )
}

export default Services