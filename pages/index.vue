<template>
  <div>
    <!-- Slider Starts -->
    <div id="main-slider" class="carousel slide carousel-fade one" data-ride="carousel">
      <!-- Wrapper For Slides Starts -->
      <div class="carousel-inner">
        <!-- Slide #1 Starts -->
        <div class="item active hero-image" >
          <div class="carousel-caption text-center text-lite-color">
            <h2 class="text-medium">Independent Insurance Agency</h2>
            <h5 class="text-light">Always Independent</h5>
            <h5 class="text-light">Work for you, Not for Insurance Companies </h5>
            <nuxt-link to="request-quote" class="btn btn-secondary animation text-medium">Free Quote</nuxt-link>
          </div>
        </div>
        <!-- Slide #1 Ends -->
      </div>
      <!-- Wrapper For Slides Ends -->
      <!-- Control Starts -->
      <!--<a class="left carousel-control animation" href="#main-slider" role="button" data-slide="prev">
        <span class="fa fa-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control animation" href="#main-slider" role="button" data-slide="next">
        <span class="fa fa-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>-->
      <!-- Control Ends -->

    </div>
    <!-- Slider Ends -->
    <!-- Welcome Section Starts -->
    <section class="intro-section">
      <!-- Nested Container Starts -->
      <div class="container text-center">
        <!-- Heading Starts -->
        <h4>We Are <span>Insurance Experts</span></h4>
        <p>We know our way around the complex world of insurance</p>
        <!-- Heading Ends -->
        <!-- Nested Row Starts -->
        <div class="row">
          <!-- Col #1 Starts -->
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="intro-col">
              <i class="fa fa-bar-chart-o circle"></i>
              <h5 class="text-bold">Business Insurance</h5>
              <p class="p_context">
                Running a successful business comes with liabilities you have to consider.  Protect your business from
                expensive liability claims.
              </p>
            </div>
          </div>
          <!-- Col #1 Ends -->
          <!-- Col #2 Starts -->
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="intro-col">
              <i class="fa fa-group circle"></i>
              <h5 class="text-bold">Homeowner Policy</h5>
              <p class="p_context">
                Homeowners' insurance provides coverage for unforeseeable disasters.  A standard policy insures the house as well as your valuables.
              </p>
            </div>
          </div>
          <!-- Col #2 Ends -->
          <!-- Col #3 Starts -->
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="intro-col">
              <i class="fa fa-money circle"></i>
              <h5 class="text-bold">Auto Insurance</h5>
              <p class="p_context">
                Most states in the US requires that you must be insured to operate a vehicle.  For most drivers, an auto insurance is
                a must.  Drive with confidence.  Get insured!
              </p>
            </div>
          </div>
          <!-- Col #3 Ends -->
          <!-- Col #4 Starts -->
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="intro-col">
              <i class="fa fa-bar-chart-o circle"></i>
              <h5 class="text-bold">Life Insurance</h5>
              <p class="p_context">
                Life insurance is about protecting your loved ones and ensuring they will be taken care of.
              </p>
            </div>
          </div>
          <!-- Col #4 Ends -->
          <!-- Col #5 Starts -->
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="intro-col">
              <i class="fa fa-group circle"></i>
              <h5 class="text-bold">Health Insurance</h5>
              <p class="p_context">
                Health care is expensive and the prices are expected to rise.  Don't get caught off guard by a huge medical bill.
              </p>
            </div>
          </div>
          <!-- Col #5 Ends -->
          <!-- Col #6 Starts -->
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="intro-col">
              <i class="fa fa-money circle"></i>
              <h5 class="text-bold">Travel Insurance</h5>
              <p class="p_context">
                Lost luggage or a travel accident can be detrimental to your experience.  Have some peace of mind
                during your vacation outings and get insured.
              </p>
            </div>
          </div>
          <!-- Col #6 Ends -->
        </div>
        <!-- Nested Row Ends -->
      </div>
      <!-- Nested Container Ends -->
    </section>
    <!-- Welcome Section Ends -->
    <!-- Services Section Starts -->
    <section class="section-services parallax">
      <!-- Nested Container Starts -->
      <div class="container text-lite-color text-center-xs">
        <!-- Nested Row Starts -->
        <div class="row">
          <!-- Starts -->
          <div class="col-md-6 col-xs-12 our-services">
            <!-- Heading Starts -->
            <h4 class="section-heading-1 text-lite-color text-center-xs no-margin-top">Our <span>Services</span></h4>
            <!-- Heading Ends -->
            <!-- Content Starts -->
            <p>
              With over 30 years of experience, DP Insurance takes pride in providing our customers the best insurance policies that are right for them.
            </p>
            <p>What you can expect from our insurance agency is a dedicated service in getting you the insurance plan you need that is right for you.</p>
            <!-- Content Ends -->
            <!-- List Starts -->
            <ul class="list-unstyled row text-medium">
              <li class="col-sm-6 col-xs-12">Free Online Quotes</li>
              <li class="col-sm-6 col-xs-12">Quote Comparison</li>
              <li class="col-sm-6 col-xs-12">Application Filing</li>
              <li class="col-sm-6 col-xs-12">Competitive Prices</li>
              <li class="col-sm-6 col-xs-12">Dedicated Team</li>
              <li class="col-sm-6 col-xs-12">Quick and Easy Access</li>

            </ul>
            <!-- List Ends -->
          </div>
          <!-- Ends -->
        </div>
        <!-- Nested Row Ends -->
      </div>
      <!-- Nested Container Ends -->
    </section>
    <!-- Services Section Ends -->
    <!-- Why Us Section Starts -->
    <!--<section class="section-area why-us-section">
      &lt;!&ndash; Nested Container Starts &ndash;&gt;
      <div class="container">
        &lt;!&ndash; Heading Starts &ndash;&gt;
        <h4 class="section-heading-1 text-center-xs no-margin-top">Why Choose <span>DP Insurance?</span></h4>
        &lt;!&ndash; Heading Ends &ndash;&gt;
        &lt;!&ndash; Spacer Starts &ndash;&gt;
        <div class="spacer-tiny"></div>
        &lt;!&ndash; Spacer Ends &ndash;&gt;
        &lt;!&ndash; Nested Row Starts &ndash;&gt;
        <div class="row">
          &lt;!&ndash; Col #1 Starts &ndash;&gt;
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="why-us-item">
              <img src="images/image17.jpg" alt="Image" class="img-responsive img-center animation">
              <div class="overlay animation">
                <div class="inner">
                  <h5><i class="fa fa-share-square"></i> Quality Service</h5>
                  <p>
                    We are an independent Insurance Broker so we work for you, not for the insurance companies
                  </p>
                  <p class="read-more text-bold"><a href="#">Read More</a> <i class="fa fa-angle-double-right"></i></p>
                </div>
              </div>
              <h5 class="why-us-item-bar animation"><i class="fa fa-share-square"></i> Quality Service</h5>
            </div>
          </div>
          &lt;!&ndash; Col #1 Ends &ndash;&gt;
          &lt;!&ndash; Col #2 Starts &ndash;&gt;
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="why-us-item">
              <img src="images/image18.jpg" alt="Image" class="img-responsive img-center animation">
              <div class="overlay animation">
                <div class="inner">
                  <h5><i class="fa fa-bar-chart-o"></i> Quality Assurance</h5>
                  <p>
                    The insurance companies we contract with are carefully selected through our screening process to ensure
                    the best policies and best plans are available for you
                  </p>
                  <p class="read-more text-bold"><a href="#">Read More</a> <i class="fa fa-angle-double-right"></i></p>
                </div>
              </div>
              <h5 class="why-us-item-bar animation"><i class="fa fa-bar-chart-o"></i> Quality Assurance</h5>
            </div>
          </div>
          &lt;!&ndash; Col #2 Ends &ndash;&gt;
          &lt;!&ndash; Col #3 Starts &ndash;&gt;
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="why-us-item">
              <img src="images/image19.jpg" alt="Image" class="img-responsive img-center animation">
              <div class="overlay animation">
                <div class="inner">
                  <h5><i class="fa fa-clock-o"></i> Record Keeping</h5>
                  <p>
                    We store your application and other important documents for you so you know exactly where they are when you need them.
                  </p>
                  <p class="read-more text-bold"><a href="#">Read More</a> <i class="fa fa-angle-double-right"></i></p>
                </div>
              </div>
              <h5 class="why-us-item-bar animation"><i class="fa fa-clock-o"></i> Record Keeping</h5>
            </div>
          </div>
          &lt;!&ndash; Col #3 Ends &ndash;&gt;
          &lt;!&ndash; Col #4 Starts &ndash;&gt;
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="why-us-item">
              <img src="images/image20.jpg" alt="Image" class="img-responsive img-center animation">
              <div class="overlay animation">
                <div class="inner">
                  <h5><i class="fa fa-cloud-download"></i>Frequently Updated</h5>
                  <p>
                    We keep you updated with any changes in the policies so you stay informed about your plan.
                  </p>
                  <p class="read-more text-bold"><a href="#">Read More</a> <i class="fa fa-angle-double-right"></i></p>
                </div>
              </div>
              <h5 class="why-us-item-bar animation"><i class="fa fa-cloud-download"></i> Frequently Updated</h5>
            </div>
          </div>
          &lt;!&ndash; Col #4 Ends &ndash;&gt;
          &lt;!&ndash; Col #5 Starts &ndash;&gt;
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="why-us-item">
              <img src="images/image21.jpg" alt="Image" class="img-responsive img-center animation">
              <div class="overlay animation">
                <div class="inner">
                  <h5><i class="fa fa-cogs"></i> Application Assistance</h5>
                  <p>
                    We provide assistance with the complex insurance application processes, all confidential.
                  </p>
                  <p class="read-more text-bold"><a href="#">Read More</a> <i class="fa fa-angle-double-right"></i></p>
                </div>
              </div>
              <h5 class="why-us-item-bar animation"><i class="fa fa-cogs"></i> Application Assistance</h5>
            </div>
          </div>
          &lt;!&ndash; Col #5 Ends &ndash;&gt;
          &lt;!&ndash; Col #6 Starts &ndash;&gt;
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="why-us-item">
              <img src="images/image22.jpg" alt="Image" class="img-responsive img-center animation">
              <div class="overlay animation">
                <div class="inner">
                  <h5><i class="fa fa-tachometer"></i> Business Protection</h5>
                  <p>
                    We offer a large selection of business policies that protect your business from various liabilities.
                  </p>
                  <p class="read-more text-bold"><a href="#">Read More</a> <i class="fa fa-angle-double-right"></i></p>
                </div>
              </div>
              <h5 class="why-us-item-bar animation"><i class="fa fa-tachometer"></i> Business Protection</h5>
            </div>
          </div>
          &lt;!&ndash; Col #6 Ends &ndash;&gt;
        </div>
        &lt;!&ndash; Nested Row Ends &ndash;&gt;
      </div>
      &lt;!&ndash; Nested Container Ends &ndash;&gt;
    </section>-->
    <!-- Why Us Section Ends -->
  </div>

</template>

<script>
import Logo from '~components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
  #main-slider .carousel-caption {
    text-shadow: 0 1px 2px rgba(0,0,0,.6);

    bottom: inherit;
    background-color: rgba(0,0,0,.10);
  }
  .hero-image {
    background-image: url('/images/stock/interracial.jpg');
    background-size: cover;
    background-position: center 40%;
    height: 650px;
  }

  .section-services {
    background-image: url('/images/stock/intense_look.jpg');

    .our-services {
      background-color: rgba(0,0,0,0.3);
    }
  }
  
  .p_context {
    min-height: 100px;
  }
</style>
