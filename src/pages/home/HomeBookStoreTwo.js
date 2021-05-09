import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderTwentyFour from "../../wrappers/hero-slider/HeroSliderTwentyFour";
import TabProductFifteen from "../../wrappers/product/TabProductFifteen";
import BannerTwentyFour from "../../wrappers/banner/BannerTwentyFour";
import FeatureIconFour from "../../wrappers/feature-icon/FeatureIconFour";

const HomeBookStoreTwo = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Bookier | Home</title>
        <meta
          name="description"
          content="Book store home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne headerTop="visible">
        {/* hero slider */}
        <HeroSliderTwentyFour />
        {/* tab product */}
        <TabProductFifteen category="book" spaceTopClass="pt-95" />
        {/* banner */}
        <BannerTwentyFour spaceTopClass="pt-100" />
        {/* feature icon */}
        <FeatureIconFour
          spaceBottomClass="pb-90"
          containerClass="container"
          responsiveClass="res-mrg-md-mt"
        />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeBookStoreTwo;
