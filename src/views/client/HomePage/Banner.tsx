import "../../../stytes/client/homepage/banner.css"

const Banner = () => {
  return (
    <>
     {/* ==== BANNER ==== */}
<section className="banner">
  <img src="../../src/assets/img/banner.jpg" alt="" />
  <div className="banner-block">
    <div className="banner-block__heading">
      <p>Trang chủ</p>
    </div>
    <div className="banner-block__text">
      <span>Home</span>
    </div>
  </div>
</section>
{/* ==== END BANNER ==== */}

    </>
  )
}

export default Banner