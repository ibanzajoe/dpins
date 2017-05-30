<template>
  <div>
    <section class="main-banner text-center-xs">
      <!-- Nested Container Starts -->
      <div class="container text-lite-color">
        <h2 class="text-medium">{{individual.heading}}</h2>
      </div>
      <!-- Nested Container Ends -->
    </section>
    <!-- Main Banner Ends -->
    <!-- Breadcrumb Starts -->
    <div class="container text-center-xs">
      <ol class="breadcrumb flat">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li>Individual</li>
        <li class="active">{{individual.crumbs}}</li>
      </ol>
    </div>
    <!-- Breadcrumb Ends -->
    <!-- Main Container Starts -->
    <div  class="main-container container">
      <!-- Nested Row Starts -->
      <template v-for="(content, index) in individual.content">
        <template v-if="index % 2 == 0">
          <div class="row text-center-xs">
            <!-- Image Media Starts -->
            <div class="col-sm-5 col-xs-12" v-if="content.side_image">
              <img :src="content.side_image" alt="About Image" class="img-responsive img-style-1 img-center-xs">
              <p class="hidden visible-xs"><br></p>
            </div>
            <!-- Image Media Ends -->
            <!-- Content Starts -->
            <div class="col-sm-7 col-xs-12">
              <p class="lead">
                <strong>{{content.heading}}</strong>
              </p>
              
              <p>
                {{content.pre_subheading}}
              </p>
              <template v-if="content.subheading.length < 4">
                <p v-for="content in content.subheading">
                  {{content}}
                </p>
              </template>
              <template v-else>
                <ul>
                  <template v-for="subheadings in content.subheading">
                    <li>
                      {{subheadings}}
                    </li>
                  </template>
                </ul>
              </template>
    
            </div>
            <!-- Content Ends -->
          </div>
  
          <!-- Nested Row Ends -->
          <!-- Spacer Starts -->
          <div class="spacer-medium"></div>
          <!-- Spacer Ends -->
          <!-- Nested Row Starts -->
        </template>
        
        <template v-else>
          <div class="row text-center-xs">
            <!-- Content Starts -->
            <div class="col-sm-7 col-xs-12">
              <p class="lead">
                <strong>{{content.heading}}</strong>
              </p>
              
              <p>
                {{content.pre_subheading}}
              </p>
              <template v-if="content.subheading.length < 4">
                <p v-for="content in content.subheading">
                  {{content}}
                </p>
              </template>
              <template v-else>
                <ul>
                  <template v-for="subheadings in content.subheading">
                    <li>
                      {{subheadings}}
                    </li>
                  </template>
                </ul>
              </template>
              
            </div>
            <!-- Content Ends -->
            <!-- Image Media Starts -->
            <div class="col-sm-5 col-xs-12" v-if="content.side_image">
              <p class="hidden visible-xs"><br></p>
              <img :src="content.side_image" alt="About Image" class="img-responsive img-style-1 img-center-xs">
            </div>
            <!-- Image Media Ends -->
          </div>
  
          <!-- Nested Row Ends -->
          <!-- Spacer Starts -->
          <div class="spacer-medium"></div>
          <!-- Spacer Ends -->
          <!-- Nested Row Starts -->
        </template>
        
        
        
  
        <div class="spacer-medium"></div>
      </template>
    
    </div>
  </div>
</template>

<script type="text/ecmascript-6" >
  
  module.exports = {
    
    computed: {
      individual () {
        return this.individuals[this.$route.params.individual]
      }
    },
    
    data () {
      return {
        individuals: {
          auto_insurance: {
            heading: "Auto Insurance",
            crumbs: "Auto Insurance",
            content: [
              {
                heading: "Why do we need car insurance?",
                pre_subheading: '',
                subheading: ["In most states, it is illegal to drive without insurance. " +
                "If you own a car and wish to drive it, you most likely need an automobile " +
                "insurance. Having auto insurance is more than just protecting your vehicle, " +
                "it is having a peace of mind from driver's worst nightmares like a bad accident, " +
                "car-jacking, as well as possible bodily injuries and fatalities."],
                side_image: '/images/stock/car-crash.jpeg'
              },
              {
                heading: "What is an auto insurance",
                pre_subheading: '',
                subheading: ["An auto insurance is a contract between you and your insurance company in which " +
                "an agreement is established where you, the client, pays the insurance premium, and in exchange " +
                "the insurance company agrees to reimburse you for any losses covered by the insurance policy."],
                side_image: '/images/stock/piggy_bank.jpg'
              },
              {
                heading: 'Auto Insurance coverage includes:',
                pre_subheading: '',
                subheading: [
                  'Bodily Injury Liability which covers anyone injured by the policy holder',
                  'Medical Payment coverage which pays for medical costs incurred by a car accident',
                  "Property Damage Liability pays for damages you caused to another driver's car. It includes other objects that may have been damaged by your car such as fences, telephone booths, lamp posts, etc...",
                  "Collision Coverage pays for damages to policy holder's car as a result of a collision, even if you, the driver, is at fault for the accident.",
                  "Comprehensive Coverage will pay you for the loss due to damage by fire, explosion, vandalism, flood, contact with animals, and theft.",
                  "Uninsured and Underinsured Motorist Coverage reimburses you in case you are hit by an uninsured or when you are involved in a hit-and-run. It is also very valuable in case where a pedestrian is hit during an accident."
                ],
                side_image: 'https://pixabay.com/get/eb35b90d2ef7013ecd1f4001e2494793e26ae3d110b4144793f1c37d/health-2082630.jpg' //link no longer works
              }
            ]
          },
          health_insurance: {
            heading: "Health Insurance",
            crumbs: "Health Insurance",
            content: [
              {
                heading: "What is health insurance?",
                pre_subheading: '',
                subheading: [
                  "Health insurance is an insurance plan where the insurer pays for the medical costs of the person being covered. When the person covered under the health insurance plan becomes sick, the insurance company (insurer) pays the medical costs on behalf of the individual who is covered.",
                  "The insurer may be a private organization or a government entity. Market based health care systems, like the one in the United States, rely primarily on private health insurance companies."
                ],
                side_image: '/images/stock/medical.jpeg'
              },
              {
                heading: "Why do we need health insurance?",
                pre_subheading: '',
                subheading: [
                  "Medical conditions can be costly and the cost of medicine has been consistently increasing. Health insurance plans protects your financial well being by mitigating your risks from the high medical care costs that can come about suddenly.",
                  "In most cases, many individuals receive their health insurance from their employers. The employer helps pay for that insurance and the plans have contracts with health care providers and medical facilities to provide care at reduced costs.",
                  "You can also purchase health insurances on your own. For most people, it will cost more than employer-based insurance plans, but individuals who meet certain requirements can qualify for government funded health insurance such as Medicare and Medicaid."
                ],
                side_image: '/images/stock/money_pills.jpeg'
              },
              {
                heading: "What factors are affecting insurance price?",
                pre_subheading: '',
                subheading: [
                  "Advances in medical technology and medical treatment has allowed for people " +
                  "in developed nations to live longer. But this longer life is creating a larger aging " +
                  "population who require more health care and more specialized medical assistance than " +
                  "the younger, healthier population. These factors cause an increase in the price of " +
                  "health insurance.",
                  "For the individual buying insurance, the cost can vary depending on the current health of " +
                  "the individual. Health related issues that can affect the overall insurance cost are: " +
                  "insufficient exercise, unhealthy food choices, living in impoverished or rural areas " +
                  "where access is more difficult, excessive alcohol use, smoking, drug use, and obesity"
                ],
                side_image: '/images/stock/watermelon.jpeg'
              }
            ]
          },
          life_insurance: {
            heading: "Life Insurance",
            crumbs: "Life Insurance",
            content: [
              {
                heading: "What is Life Insurance?",
                pre_subheading: '',
                subheading: [
                  "For thousands of Americans, Life Insurance is the ideal solution for ensuring financial protection for their family and their business. Term life insurance provides affordable, guaranteed, death benefits and coverage.",
                  "For many, this means protecting their families from mortgage burden, debt collectors, and the costly funeral costs in case of premature death. For others, it provides the coverage needed to ensure the continuity of their businesses."
                ],
                side_image: '/images/stock/walk_to_light.jpg'
              },
              {
                heading: "About ROPTerm",
                pre_subheading: '',
                subheading: [
                  "ROPTerm is a reliable term coverage for 15, 20, or 30 years. At the end of the term, the insurance company will refund all premiums paid directly to the policy holder.",
                  "Guaranteed level-premium coverage for 15, 20, or 30 years with face amount of $100,000 and up.",
                  "Return of cumulative premiums paid at the end of the level-premium period."
                ],
                side_image: '/images/stock/piggy_bank.jpg'
              },
              {
                heading: "About Level Term",
                pre_subheading: 'AIG "Select-a-Term" provides 18 level terms periods to choose from with expanded issue ages and competitive rates. The flexibility of AIG "Select-a-Term" is a powerful new way to customize a life insurance plan. This product is not available to New York.',
                subheading: [
                  "Level death benefit protection at a full guaranteed premium for 10, 12, 15, and 30 years.",
                  "Minimum face amount of $250,000",
                  "Rates are banded at $1,000,000",
                  "$50.00 non-commissionable policy fee",
                  "Six underwriting classes - 4 non-tobacco and 2 tobacco",
                  "Convertible during the earlier of the level term period or age 75",
                  "Disability income rider is available on policies with face amount above $250,000 issued standard or better. The rider has a 90-day elimination period and a 2-year benefit period"
                ],
                side_image: '/images/stock/gears.jpeg'
              }
            ]
          },
          homeowner_policy: {
            heading: "Homeowner Policy",
            crumbs: "Homeowner Policy",
            content: [
              {
                heading: "What is homeowners insurance policy?",
                pre_subheading: '',
                subheading: [
                  "Homeowners insurance provides financial protection against disasters. A standard policy not only insures the home and the building, but your other valuable possessions as well.",
                  "Homeowners insurance is a packaged policy meaning that it covers both damages to your property as well as covers your liabilities or legal responsibilities for any injuries or property damage you or members of your family caused to other people. This includes damages caused by household pets."
                ],
                side_image: '/images/stock/smallhouse.png'
              },
              {
                heading: "What is covered by a homeowners insurance?",
                pre_subheading: '',
                subheading: [
                  "Damage caused by most disasters is covered but there are exceptions. The most significant exceptions are damages caused by floods, earthquakes, and poor maintenance. For earthquakes and floods, you must buy separate policies to insure against them. Maintenance-related problems are homeowners' responsibility."
                ],
                side_image: ''
              },
              {
                heading: "What is in a standard homeowners insurance policy?",
                pre_subheading: "A standard homeowners insurance policy includes four essential types of coverage: ",
                subheading: [
                  "Coverage for the structure of your home",
                  "Coverage for your personal belongings",
                  "Liability protection",
                  "Additional living expenses in the event you are temporarily unable to live in your home"
                ],
                side_image: ''
              },
              
              {
                heading: "1. The structure of your house",
                pre_subheading: "",
                subheading: [
                  "This part of your policy pays to repair or rebuild your home if it is damaged or destroyed by fire, hurricane, hail, lightning, or other disaster listed in your policy. It will not pay for damages caused by a flood, earthquake, or routine wear and tear. When purchasing coverage for the structure of your home, it is important to buy enough to rebuild your home.",
                  "Most standard policies also cover structures that are detached from your home such as a garage, tool shed, or gazebo. Generally, these structures are covered for about 10% of the amount of insurance you have on the structure of your home. If you need more coverage, talk to your insurance agent about purchasing more insurance."
                ],
                side_image: '/images/stock/simple-home.jpeg'
              },
              {
                heading: "2. Your personal belonging",
                pre_subheading: "",
                subheading: [
                  "Your furniture, clothes, sports equipment, and other personal items are covered if they are stolen or destroyed by fire, hurricane, or other insured disaster. most companies provide coverage for 50% to 70% of the amount of insurance you have on the structure of your home. So if you have a $100,000 worth of insurance on the structure of your home, you would have between $50,000 to $70,000 worth of coverage for your belongings. The best way to determine if this is enough coverage is to conduct a home inventory.",
                  "Expensive items like jewelry, furs, and silverware are covered, but usually there " +
                  "are maximum limits if they are stolen. Generally, you are covered for between " +
                  "$1,000 to $2,000 for all of your jewelry and furs. To insure these items to " +
                  "their full value, purchase a special personal property endorsement or floater " +
                  "and insure the item for it's appraised value. Coverage includes 'accidental " +
                  "disappearance,'  meaning coverage if you simply lose that item. There are no " +
                  "deductible."
                ],
                side_image: '/images/stock/fancy-stuff.jpeg'
              },
              {
                heading: "3. Liability protection",
                pre_subheading: "",
                subheading: [
                  "Liability covers you against lawsuits for bodily injury or property damage that you or family members cause to other people. It also pays for damage caused by your pets. So, if your son, daughter, or dog accidently ruins your neighbor's expensive rug, you are covered. However, if they destroy your rug, you are not covered.",
                  "Your policy also provides no-fault medical coverage. In the event a friend or neighbor is injured in your home, he or she can simply submit medical bills to your insurance company. This way, expenses are paid without a liability claim being filed against you. You can generally get $1,000 to $5,000 worth of this coverage. It does not, however, pay the medical bills for yoru family or your pet."
                ],
                side_image: '/images/stock/faucet.jpg'
              },
              {
                heading: "4. Additional living expenses",
                pre_subheading: "",
                subheading: [
                  "This pays the additional costs of living away from home if you can't live there due to damages from fire, store, or other insured disaster. It covers hotel bills, restaurant meals, and other living expenses incurred while your home is being rebuilt/repaired. Coverage for additional living expenses differs from company to company. Many policies provide coverage for about 20% of the insurance on your house. You can increase this coverage, however, for an additional premium. Some companies sell a policy that provides an unlimited amount of loss-of-use coverage, but for a limited amount of time.",
                  "If you rent out part of your house, this coverage also reimburses you for the rent that you would have collected from your tenant if your home had not been destroyed."
                  
                ],
                side_image: '/images/stock/piggy_bank.jpg'
              }
            ]
          }
        }
      }
    }
  }
</script>