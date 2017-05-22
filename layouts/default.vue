<template>
  <div>
    <!-- Top Bar Starts -->
    <div class="top-bar dark">
      <!-- Nested Container Starts -->
      <div class="container clearfix text-center-xs">
        <p class="pull-left-lg pull-left-md pull-left-sm">
          We welcome you to DP Insurance Agency website, we are a no hassel insurance broker!
        </p>
        <p class="pull-right-lg pull-right-md pull-right-sm text-right-lg text-right-md text-right-sm">
          <i class="fa fa-clock-o"></i>&nbsp;
          Monday - Friday : 8:30 AM to 5:30 PM
          <br>
          Saturday: 10:00 AM to 2:00 PM
        </p>
      </div>
      <!-- Nested Container Ends -->
    </div>
    <!-- Top Bar Ends -->
    <!-- Header Starts -->
    <header class="main-header one">
      <!-- Nested Container Starts -->
      <div class="container text-center-xs">
        <!-- Nested Row Starts -->
        <div class="row">
          <!-- Logo Starts -->
          <div class="col-lg-3 col-sm-4 col-xs-12">
            <nuxt-link to="/">
              <img src="/images/logo/dp logo.png" alt="Fin Adviser" class="img-responsive img-center-xs logo">
            </nuxt-link>
          </div>
          <!-- Logo Ends -->
          <!-- Address Starts -->
          <div class="col-sm-4 col-xs-12 hidden-md hidden-sm hidden-xs">
            <div class="clearfix">
              <div class="pull-right-lg">
                <h6 class="text-spl-color text-medium">1130 S. San Gabriel Blvd #202,</h6>
                <p class="text-light"><em>San Gabriel, CA 91776-3155</em></p>
              </div>
              <i class="fa fa-map-marker pull-right-lg pull-left-md pull-left-sm circle"></i>
            </div>
          </div>
          <!-- Address Ends -->
          <!-- Call Us Starts -->
          <div class="col-lg-2 col-sm-3 col-xs-12 hidden-xs">
            <div class="clearfix text-right-md text-right-sm">
              <i class="fa fa-phone pull-left-lg pull-right-md pull-right-sm circle"></i>
              <h6 class="text-spl-color text-medium">Call Us On</h6>
              <p class="text-light"><em>1-626-292-6608</em></p>
            </div>
          </div>
          <!-- Call Us Ends -->
          <!-- Mail Us Starts -->
          <div class="col-lg-3 col-sm-5 col-xs-12 hidden-xs">
            <div class="clearfix text-right-md text-right-sm">
              <i class="fa fa-envelope-o pull-left-lg pull-right-md pull-right-sm circle"></i>
              <h6 class="text-spl-color text-medium">Mail Us @</h6>
              <p class="text-light"><em><a href="mailto:procenter@dp-formosa.com">procenter@dp-formosa.com</a></em></p>
            </div>
          </div>
          <!-- Mail Us Ends -->
        </div>
        <!-- Nested Row Ends -->
      </div>
      <!-- Nested Container Ends -->
    </header>
    <!-- Header Ends -->
    <!-- Nested Container Starts -->
    <div class="container">
      <!-- Main Menu Starts -->
      <nav id="nav" class="main-menu one navbar flat">
        <!-- Nested Container Starts -->
        <div class="container-fluid">
          <!-- Nav Header Starts -->
          <div class="navbar-header">
            <button type="button" class="btn btn-navbar navbar-toggle flat animation" data-toggle="collapse" data-target=".navbar-cat-collapse">
              <span class="sr-only">Toggle Navigation</span>
              <i class="fa fa-bars"></i>
            </button>
          </div>
          <!-- Nav Header Ends -->
          <!-- Navbar Cat collapse Starts -->
          <div class="collapse navbar-collapse navbar-cat-collapse animation">
            <!-- Nav Links Starts -->
            <ul class="nav navbar-nav text-bold">
              <nuxt-link to="/" tag="li" active-class="active" exact><a>Home</a></nuxt-link>
              <nuxt-link to="/about" tag="li" active-class="active" exact><a>About Us</a></nuxt-link>


              <nuxt-link to="/products/individual" tag="li" active-class="active" class="dropdown">
                <a>Individual Products <i class="fa fa-angle-down"></i></a>
                <ul class="dropdown-menu flat" role="menu">
                  <nuxt-link to="/products/individual/health_insurance" tag="li" active-class="active" exact><a>Health Insurance</a></nuxt-link>
                  <nuxt-link to="/products/individual/life_insurance" tag="li" active-class="active" exact><a>Life Insurance</a></nuxt-link>
                  <nuxt-link to="/products/individual/auto_insurance" tag="li" active-class="active" exact><a>Auto Insurance</a></nuxt-link>
                  <nuxt-link to="/products/individual/homeowner_policy" tag="li" active-class="active" exact><a>Homeowner Policy</a></nuxt-link>
                </ul>
              </nuxt-link>

              <nuxt-link to="/products/business" tag="li" active-class="active" class="dropdown">
                <a>Business Products <i class="fa fa-angle-down"></i></a>
                <ul class="dropdown-menu flat" role="menu">
                  <nuxt-link to="/products/business/business_insurance" tag="li" active-class="active" exact><a>Business Insurance</a></nuxt-link>
                  <nuxt-link to="/products/business/workers_comp" tag="li" active-class="active" exact><a>Workers' Compensation</a></nuxt-link>
                  <nuxt-link to="/products/business/error_omission" tag="li" actives-class="active" exact><a>Errors and Omissions</a></nuxt-link>
                  <nuxt-link to="/products/business/director_officer" tag="li" active-class="active" exact><a>Director and Officer</a></nuxt-link>
                  <nuxt-link to="/products/business/builders_risk" tag="li" active-class="active" exact><a>Builders Risk Coverage</a></nuxt-link>
                  <nuxt-link to="/products/business/employment_practice" tag="li" active-class="active" exact><a>Employment Practice Liability</a></nuxt-link>
                </ul>
              </nuxt-link>
            </ul>
            <!-- Nav Links Ends -->
            <!-- Call Back Starts -->
            <h6 class="navbar-right hidden-md hidden-sm hidden-xs text-uppercase animation">
              <a href="#">Get A Call Back</a>
            </h6>
            <!-- Call Back Ends -->
            <!-- Search Form Starts -->
            <form class="navbar-form navbar-right hidden-sm hidden-xs" role="search">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Search">
                <span class="input-group-btn">
                                <button class="btn btn-default" type="button">
                                    <i class="fa fa-search"></i>
                                </button>
                            </span>
              </div>
            </form>
            <!-- Search Form Ends -->
          </div>
          <!-- Navbar Cat collapse Ends -->
        </div>
        <!-- Nested Container Ends -->
      </nav>
      <!-- Main Menu Ends -->
    </div>
    <!-- Nested Container Ends -->

    <nuxt/>



    <section class="footer-top-1">
      <!-- Nested Container Starts -->
      <div class="container text-center-xs">
        <!-- Nested Row Starts -->
        <div class="row">
          <!-- Left Col Starts -->
          <div class="col-md-6 col-xs-12">
            <!-- Contact Info Fin Advisor Starts -->
            <h4 class="section-heading-1 text-center-xs">Contact Info <span>DP Insurance</span></h4>
            <p>
              <strong>Get help navigating the complex world of insurance</strong>, choose DP Insurance Agency.  We make insurance quick and easy
              so you can have the peace of mind that you are covered.
            </p>
            <div class="row">
              <!-- Phone Col Starts -->
              <div class="col-sm-4 col-xs-12">
                <div class="foot-col-1">
                  <h5><i class="fa fa-phone"></i> Phone</h5>
                  <ul class="list-unstyled list-phone-no">
                    <li>1-626-292-6608</li>
                  </ul>
                </div>
              </div>
              <!-- Phone Col Ends -->
              <!-- Email Starts -->
              <div class="col-sm-4 col-xs-12">
                <div class="foot-col-1">
                  <h5><i class="fa fa-envelope"></i> Email</h5>
                  <ul class="list-unstyled list-email">
                    <li><a href="mailto:procenter@dp-formosa.com">procenter@dp-formosa.com</a></li>
                  </ul>
                </div>
              </div>
              <!-- Email Ends -->
              <!-- Address Starts -->
              <div class="col-sm-4 col-xs-12">
                <div class="foot-col-1">
                  <h5><i class="fa fa-map-marker"></i> Address</h5>
                  <ul class="list-unstyled list-address">
                    <li><strong>1130 S. San Gabriel Blvd #202</strong></li>
                    <li>San Gabriel, CA 91776-3155</li>
                  </ul>
                </div>
              </div>
              <!-- Address Ends -->
            </div>
            <!-- Contact Info Fin Advisor Ends -->
          </div>
          <!-- Left Col Ends -->
          <!-- Right Col Starts -->
          <div class="col-md-6 col-xs-12">
            <!-- Schedule an Appointment Starts -->
            <h4 class="section-heading-1 text-center-xs">Schedule an <span>Appointment</span></h4>
            <form @submit.prevent="handle_schedule_form" class="appointment-form">
              <!-- Nested Row Starts -->
              <div class="row">
                <!-- First Name Starts -->
                <div class="col-sm-6 col-xs-12">
                  <input type="text" class="form-control flat animation" placeholder="First Name">
                </div>
                <!-- First Name Ends -->
                <!-- Last Name Starts -->
                <div class="col-sm-6 col-xs-12">
                  <input type="text" class="form-control flat animation" placeholder="Last Name">
                </div>
                <!-- Last Name Ends -->
                <!-- Email Starts -->
                <div class="col-sm-6 col-xs-12">
                  <input type="email" class="form-control flat animation" placeholder="E-mail">
                </div>
                <!-- Email Ends -->
                <!-- Type of Service Starts -->
                <div class="col-sm-6 col-xs-12">
                  <input type="tel" class="form-control flat animation" placeholder="Phone No">

                </div>
                <!-- Type of Service Ends -->
                <!-- Phone No Starts -->
                <div class="col-xs-12">
                  <select class="form-control flat animation">
                    <option>Type of Services</option>
                    <option value="individual">Individual Insurance</option>
                    <option value="business">Business Insurance</option>
                  </select>
                </div>
                <!-- Phone No Ends -->
                <!-- Message Starts -->
                <div class="col-xs-12">
                  <textarea rows="5" class="form-control flat animation" placeholder="Message"></textarea>
                </div>
                <!-- Message Ends -->
                <!-- Submit Button Starts -->
                <div class="col-xs-12">
                  <button type="submit" class="btn btn-big btn-secondary animation flat">Book Appointment</button>
                </div>
                <!-- Submit Button Ends -->
              </div>
              <!-- Nested Row Ends -->
            </form>
            <!-- Schedule an Appointment Ends -->
          </div>
          <!-- Right Col Ends -->
        </div>
        <!-- Nested Row Ends -->
      </div>
      <!-- Nested Container Ends -->
    </section>
    <!-- Footer Top Section Ends -->
    <!-- Copyright Starts -->
    <footer class="copyright-1">
      <!-- Nested Container Starts -->
      <div class="container text-center text-lite-color">
        <ul class="list-unstyled list-inline">
          <li><a href="#">| Terms of Use |</a></li>
          <li><a href="#">| Career |</a></li>
          <li><a href="#">| Privacy Policy |</a></li>
          <!--<li><a href="#"><i class="fa fa-instagram"></i></a></li>
          <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>-->
        </ul>
        <em class="text-light">DP Insurance &copy; 2017. All Rights Reserved. Designed By <a href="http://www.penguin.ws">Penguin Website Inc.</a></em>
      </div>
      <!-- Nested Container Ends -->
    </footer>
    <!-- Copyright Ends -->
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      handle_schedule_form () {
        swal("Good job!", "You clicked the button!", "success")
      }
    }
  }
</script>

<style>
html
{
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
.button--green
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover
{
  color: #fff;
  background-color: #3b8070;
}
.button--grey
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover
{
  color: #fff;
  background-color: #35495e;
}

  .container {
    min-height: 100%;
  }
</style>
