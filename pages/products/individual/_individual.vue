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
          <div class="row is-flex is-ac text-center-xs">
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
          <div class="row is-flex is-ac text-center-xs">
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
    head () {
      return {
        title: this.individual.heading
      }
    },
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
                pre_subheading: 'In most states, it is illegal to drive without insurance. If you own a car and wish to drive it, you will most likely need automobile insurance. Having auto insurance is more than just protecting your vehicle, it is having about having peace of mind from your worst nightmares like a bad accident, car-jacking, as well as possible bodily injuries and fatalities.',
                subheading: [],
                side_image: '/images/stock/car-crash.jpg'
              },
              {
                heading: "What is auto insurance?",
                pre_subheading: 'Auto insurance is a contract between you and your insurance company in which an agreement is established where you, the client, pays the insurance premium, and in exchange the insurance company agrees to reimburse you for any losses covered by the insurance policy.',
                subheading: [],
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
                side_image: '/img/health-gears.jpg'
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
                side_image: '/images/stock/medical.jpg'
              },
              {
                heading: "Why do we need health insurance?",
                pre_subheading: '',
                subheading: [
                  "Medical conditions can be costly and the cost of medicine has been consistently increasing. Health insurance plans protects your financial well being by mitigating your risks from the high medical care costs that can come about suddenly.",
                  "In most cases, many individuals receive their health insurance from their employers. The employer helps pay for that insurance and the plans have contracts with health care providers and medical facilities to provide care at reduced costs.",
                  "You can also purchase health insurances on your own. For most people, it will cost more than employer-based insurance plans, but individuals who meet certain requirements can qualify for government funded health insurance such as Medicare and Medicaid."
                ],
                side_image: '/images/stock/money_pills.jpg'
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
                side_image: '/images/stock/watermelon.jpg'
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
                side_image: '/images/stock/gears.jpg'
              }
            ]
          },
          homeowner_policy: {
            heading: "Homeowner Policy",
            crumbs: "Homeowner Policy",
            content: [
              {
                heading: "What is homeowners insurance?",
                pre_subheading: '',
                subheading: [
                  "Homeowners insurance provides financial protection against disasters. A standard policy not only insures the home and the building, but your other valuable possessions as well.",
                  "Homeowners insurance is a packaged policy meaning that it covers both damages to your property as well as covers your liabilities or legal responsibilities for any injuries or property damage you or members of your family caused to other people. This includes damages caused by household pets."
                ],
                side_image: '/images/stock/smallhouse.png'
              },
              {
                heading: "What is covered by homeowners insurance?",
                pre_subheading: "Damage caused by most disasters is covered but there are exceptions. The most significant exceptions are damages caused by floods, earthquakes, and poor maintenance. For earthquakes and floods, you must buy separate policies to insure against them. Maintenance-related problems are a homeowners' responsibility.",
                subheading: []
              },
              {
                heading: "What is in a standard homeowners insurance policy?",
                pre_subheading: "A standard homeowners insurance policy includes four essential types of coverage: ",
                subheading: [
                  "Coverage for the structure of your home",
                  "Coverage for your personal belongings",
                  "Liability protection",
                  "Additional living expenses in the event you are temporarily unable to live in your home"
                ]
              },

              {
                heading: "1. The structure of your house",
                pre_subheading: "",
                subheading: [
                  "This part of your policy pays to repair or rebuild your home if it is damaged or destroyed by fire, hurricane, hail, lightning, or other disaster listed in your policy. It will not pay for damages caused by a flood, earthquake, or routine wear and tear. When purchasing coverage for the structure of your home, it is important to buy enough to rebuild your home.",
                  "Most standard policies also cover structures that are detached from your home such as a garage, tool shed, or gazebo. Generally, these structures are covered for about 10% of the amount of insurance you have on the structure of your home. If you need more coverage, talk to your insurance agent about purchasing more insurance."
                ],
                side_image: '/images/stock/simple-home.jpg'
              },
              {
                heading: "2. Your personal belongings",
                pre_subheading: "",
                subheading: [
                  "Your policy also provides no-fault medical coverage. In the event a friend or neighbor is injured in your home, he or she can simply submit medical bills to your insurance company. This way, expenses are paid without a liability claim being filed against you. You can generally get $1,000 to $5,000 worth of this coverage. It does not, however, pay the medical bills for your family or your pet.",
                  "This pays the additional costs of living away from home if you can't live there due to damages from fire or other insured disaster. It covers hotel bills, restaurant meals, and other living expenses incurred while your home is being rebuilt/repaired. Coverage for additional living expenses differs from company to company. Many policies provide coverage for about 20% of the insurance on your house. You can increase this coverage, however, for an additional premium. Some companies sell a policy that provides an unlimited amount of loss-of-use coverage, but for a limited amount of time."
                ],
                side_image: '/images/stock/fancy-stuff.jpg'
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
          },
          credit_insurance: {
            heading: "Credit Insurance",
            crumbs: "Credit Insurance",
            content: [
              {
                heading: "What is credit insurance?",
                pre_subheading: '',
                subheading: [
                  "Credit insurance is an insurance policy associated with a specific loan or line of credit which pays " +
                  "back some or all of any money owed should certain things happen to the borrower, such as death, " +
                  "disability, or unemployment.",
                  "The costs (called a 'premium') for this are usually charged monthly, depending on the balance owed, " +
                  "and depending on the usage of the loan or line, could almost double the cost of it (on the opposite " +
                  "end of the spectrum, clever usage could avoid having to pay almost any premium at all)."
                ],
                side_image: '/img/creditinsurance.jpg'
              },
              {
                heading: "",
                pre_subheading: '',
                subheading: [
                  "The sale of credit insurance is controversial because it is almost always cheaper for an individual " +
                  "to forgo credit insurance, and instead have a term life insurance or disability insurance policy to " +
                  "cover the credit balance. The reason is that credit insurance is guaranteed issue, no matter if a " +
                  "person would otherwise be insurable or not. So the rates offered must reflect this, and be worse " +
                  "than if a healthy or otherwise insurable person were to purchase coverage on their own.",
                  "In addition, there is an even more controversial practice (called single premium credit insurance), " +
                  "usually associated with the sub prime lending industry, of charging the premium only one time at the " +
                  "beginning of the loan. For example, charging $5,000 dollars at the time of a mortgage refinance, " +
                  "which is usually financed (added to the total loan amount) as part of the loan. This is considered " +
                  "very bad by critics, since doing this is only cheaper if one is sure that one is going to stay " +
                  "with the loan forever and not refinance. Critics contend most people do not realize this and lose " +
                  "money by refinancing once again, thereby losing the benefits of the credit insurance."
                ],
                side_image: '/img/nickleanddime.jpg'
              },
              {
                heading: "Do I really need a credit insurance?",
                pre_subheading: "Before deciding to buy credit insurance from a lender, think about your needs, your " +
                "options, and the rates you're going to pay. You may decide you don't need credit insurance. " +
                "If you do, credit insurance can be an expensive form of insurance. For example, it may be less " +
                "expensive and more practical for you to get life insurance than credit insurance. Before deciding " +
                "to buy credit insurance, you should ask:",
                subheading: [
                  "How much is the premium?",
                  "Will the premium be financed as part of the loan?  If so, it will increase your laon amount and you'll pay " +
                  "additional interest, and more for points(if points are on your loan).",
                  "Can you pay monthly instead of financing the entire premium as part of your loan?",
                  "How much lower would your monthly loan payment be without the credit insurance?",
                  "Will the insurance cover the full length of your loan and the full loan amount?",
                  "What are the limits and exclusions on payment of benefits - that is spelled out exactly what's covered and what's not.",
                  "Is there a waiting period before the coverage becomes effective?",
                  "If you have a co-borrower, what coverage does he or she have and at what cost?",
                  "Can you cancel the insurance? If so, what kind of refund is available?"
                ],
                side_image: '/img/doineed.jpg'
              }
            ]
          },
          earthquake_insurance: {
            heading: "Earthquake Insurance",
            crumbs: "Earthquake Insurance",
            content: [
              {
                heading: "What is an earthquake insurance?",
                pre_subheading: '',
                subheading: [
                  "Earthquake insurance is a form of property insurance that pays the policyholder in the event of an " +
                  "earthquake that causes damage to the property. Most ordinary homeowners' insurance policies do not " +
                  "cover earthquake damage. Most earthquake insurance policies feature a high deductible, which makes " +
                  "this type of insurance useful if the entire home is destroyed, but not useful if the home is merely " +
                  "damaged.",
                  "Rates depend on location and the probability of an earthquake. Rates may be cheaper for " +
                  "homes made of wood, which withstand earthquakes better than homes made of brick."
                ],
                side_image: '/images/stock/earthquake.jpg'
              },
              {
                heading: "Should you buy earthquake insurance?",
                pre_subheading: '',
                subheading: [
                  "There are many circumstances and needs to consider when deciding if earthquake insurance is a good buy. " +
                  "There isn't one answer for everyone, but for most people their home is their major asset. Protecting " +
                  "it just makes good sense.",
                  "An earthquake endorsement generally excludes damages or losses from floods and tidal waves – even " +
                  "when caused or compounded by an earthquake. However, loss caused by landslide, settlement, mudflow " +
                  "and the rising, sinking and contracting of earth may be covered if the damage resulted from an earthquake."
                ],
                side_image: '/images/stock/earthquake-dry.jpg'
              },
              {
                heading: "Earthquake insurance in California",
                pre_subheading: '',
                subheading: [
                  "Earthquake insurance has become a political issue in California, whose residents purchase more " +
                  "earthquake insurance than residents of any other state in the U.S. After the 1994 Northridge " +
                  "earthquake, nearly all insurance companies completely stopped writing homeowners' insurance " +
                  "policies altogether in the state because under California law (The 'mandatory offer law'), " +
                  "companies offering homeowners' insurance must also offer earthquake insurance.",
                  "Eventually the legislature created a 'mini policy' that could be sold by any insurer to comply with the " +
                  "mandatory offer law: only structural damage need be covered, with a 15% deductible. Claims on " +
                  "personal property loses and 'loss of use' are limited. The legislature also created a quasi-public " +
                  "(privately funded, public managed) agency called CEA California Earthquake Authority.",
                  "Membership in the CEA by insurers is voluntary and member companies satisfy the mandatory " +
                  "offer law by selling the CEA mini policy. Premiums are paid to the insurer, and then pooled " +
                  "in the CEA to cover claims from homeowners with a CEA policy from member insurers. " +
                  "The state of California specifically states that it does not back up CEA earthquake " +
                  "insurance, in the event that claims from a major earthquake were to drain all CEA funds, " +
                  "nor will it cover claims from non-CEA insurers if they were to become insolvent due to " +
                  "earthquake losses."
                ],
                side_image: '/img/ca-hollywood.jpg'
              }
            ]
          }
        }
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .row {
    &.is-flex {
      display: flex;
      &.is-ac {
        align-items: center;
      }
    }
  }

</style>
