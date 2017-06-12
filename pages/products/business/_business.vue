<template>
  <div>
    <section class="main-banner text-center-xs">
      <!-- Nested Container Starts -->
      <div class="container text-lite-color">
        <h2 class="text-medium">{{business.heading}}</h2>
      </div>
      <!-- Nested Container Ends -->
    </section>
    <!-- Main Banner Ends -->
    <!-- Breadcrumb Starts -->
    <div class="container text-center-xs">
      <ol class="breadcrumb flat">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li>Business</li>
        <li class="active">{{business.crumbs}}</li>
      </ol>
    </div>
    <!-- Breadcrumb Ends -->
    <!-- Main Container Starts -->
    <div  class="main-container container">
      <!-- Nested Row Starts -->
      <template v-for="(content, index) in business.content">
        <template v-if="index % 2 == 0">
          <div class="row text-center-xs">
            <!-- Image Media Starts -->
            <div v-if="content.side_image" class="col-sm-5 col-xs-12">
              <img :src="content.side_image" alt="About Image" class="img-responsive img-style-1 img-center-xs">
              <p class="hidden visible-xs"><br></p>
            </div>
            <!-- Image Media Ends -->
            <!-- Content Starts -->
            <div class="col-sm-7 col-xs-12">
              <p >
                <strong>{{content.pre_heading}}</strong>
              </p>
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
              <p>
                <strong style="font-size: 2rem;">{{content.pre_heading}}</strong>
              </p>
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
            <div v-if="content.side_image" class="col-sm-5 col-xs-12">
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
        title: this.business.heading
      }
    },

    computed: {
      business () {
        return this.businesses[this.$route.params.business]
      }
    },

    data () {
      return {
        businesses: {
          business_insurance: {
            heading: "Business Insurance",
            crumbs: "Business Insurance",
            content: [
              {
                heading: "Why do you need business insurance?",
                pre_subheading: '',
                subheading: [
                  "When running a business, you HAVE to consider your liabilities. Even if you don't have a big, prosperous, business, liability insurance is essential and can be a crucial part of protecting your business and financial health.",
                  "Liability insurance covers employees and customer injuries that may occur at your place of business. Even in cases where someone you are not associated with causes someone else injury at your place of business, your business may still be held liable for damages. Liability insurance can cover you from such claims of personal injury as well as any other claims involving any type of abuse and sexual harassment."
                ],
                side_image: "/images/stock/business.jpg"
              },
              {
                heading: "What are different types of commonly used business insurance?",
                pre_subheading: 'There are various types of liability insurance for businesses. General liability insurance protects you from most business associated injuries and accidents. Professional liability is an often overlooked coverage which protects you from claims from clients who may have suffered losses from your malpractice, professional advice, errors and/or negligence. Product liability protects your business from potential problems caused by your product. The amount of coverage for product liability will vary depending on what products and/or services your business serves. Common business liability insurance exposures are:',
                subheading: [
                  "Commercial General Liability Insurance (CGPL)",
                  "Business Automobile Policy (BAP)",
                  "Employers Liability and Workers Compensation",
                  "Manufacturers and Contractors Liabilities (M&C)",
                  "Owners, Landlords, and Tenants Liability Insurance Policy (OL&T)",
                  "Physicians, Surgeons, and Dentists Professional Liability"
                ],
                side_image: "/images/stock/word_jumble.jpg"
              }
            ]
          },
          workers_comp: {
            heading: "Workers' Compensation",
            crumbs: "Workers' Compensation",
            content: [
              {
                heading: "Why do you need workers' compensation insurance?",
                pre_subheading: '',
                subheading: [
                  "Workers compensation insurance provides coverage of medical care and other compensation of benefits to employees who are insured in the course of employment in exchange for mandatory relinquishment of the employee's right to sue their employer for tort of negligence.",
                  'There is a tradeoff between the assured, limited coverage and lack of recourse outside the worker compensation system called "the compensation bargain". While schemes differ between jurisdictions, provisions can be made for weekly payments in place of wages, compensation for economic loss, reimbursement and payment of medical expenses, and benefits payable to the dependents of workers killed during employment.'
                ],
                side_image: "/img/accident-994005_640.jpg"
              },
              {
                heading: "How does it work?",
                pre_subheading: '',
                subheading: [
                  "California’s workers’ compensation act provides an example of a comprehensive state compensation program. It is applicable to most employers. The statute limits the liability of the employer and fellow employees. As stipulated in the law, California requires employers to obtain insurance to cover potential workers’ compensation claims. In purchasing insurance, the employer’s insurance carrier agrees to indemnity the employer’s employees on the employer’s behalf for potential loss of wages, medical treatment, or other benefits payable to the employee up to the policy’s liability limit."
                ],
                side_image: "/images/stock/piggy_bank.jpg"
              }
            ]
          },
          error_omission: {
            heading: "Errors and Omissions",
            crumbs: "Errors and Omissions",
            content: [
              {
                heading: "What is Errors & Omissions Insurance?",
                pre_subheading: '',
                subheading: [
                  "Errors and Omission Insurances protect your company from claims made by clients who hold you responsible for errors or some other failure regarding the work performed as promised in your contract.",
                  "Error and Omissions insurance coverage extends to both W2 employees as well as 1099 subcontractors and can be worldwide in scope."
                ],
                side_image: "/img/contract.jpg"
              },
              {
                heading: "When do I need Errors and Omissions Insurance?",
                pre_subheading: '',
                subheading: [
                  "Error and Omissions Insurance is generally recommended to be at the foundation of every company's insurance portfolio. It is usually wise to purchase the coverage prior to product launch or when you start servicing customers.",
                  "Coverage includes legal defense costs, no matter how baseless the allegations. With Error and Omission insurance, you will be reimbursed for any resulting judgement against you including the court cost, up to the coverage limits of your policy."
                ],
                side_image: "https://image.shutterstock.com/z/stock-photo-worried-businesswoman-receiving-a-notification-from-a-colleague-in-her-workplace-at-office-393282928.jpg"
              },
              {
                heading: "Why do I need Errors & Omissions Insurance?",
                pre_subheading: '',
                subheading: [
                  "Mistakes Happen. Every company messes up at some point. You can't be everywhere and sometimes you can't personally handle every job. Errors and Omissions coverage insures not only your mistakes, but the mistakes of your employees and independent contractors you hire as well.",
                  "Most Importantly: Errors and Omissions insurance can save you from extreme embarrassment, a lost client, and a bad reputation."
                ]
              }
            ]
          },
          director_officer: {
            heading: "Director and Officer (D&O) Liability",
            crumbs: "Director and Officer",
            content: [
              {
                heading: "What is Director and Officer (D&O) Liability?",
                pre_subheading: '',
                subheading: [
                  "D& O Liability provides coverage for lawsuits that arise out of wrongful acts, or errors and omission-type claims. Examples of such claims under this policy would be: employment-related claims like negligent hiring practices or wrongful termination, acts beyond the authority of the director or officer involved including wrongful suspension of employees and or officers, selection and eligibility disputes, in addition to matters involving changes to interpretation of or implementation of rules with regards to sexual harassment, gender, race, or ethnicity.",
                  "If officers of your company are sued for these types of incidents, coverage for such claims would fall under a D&O policy."
                ],
                side_image: "/img/directors-and-officers.jpg"
              },
              {
                heading: "",
                pre_subheading: "D&O Insurance does not cover claims that arise out of bodily injury or property damage. Those types of incidents are specifically covered under the general liability policy. For example, if a board member or director of a sports team is sued because a player was severely injured or because the team vandalized someone’s property, those claims would be covered under the general liability policy.",
                subheading: [
                  "",
                  ""
                ],
                side_image: "/images/stock/word_jumble.jpg"
              },
              {
                heading: "Who is covered by D&O insurance?",
                pre_subheading: 'A D&O policy protects the individual directors and officers of a company. It also covers the company itself, as well as managing members while acting in an official capacity.',
                subheading: [],
                side_image: "/img/corporate-owner.jpeg"
              },
              {
                heading: "Who should purchase the coverage?",
                pre_subheading: 'We recommend that all companies consider purchasing D&O liability to protect their board members and operations. Coverage is available for all types of companies, associations, and sports leagues and can be specifically tailored to accommodate all key personnel.',
                subheading: []
              }
            ]
          },
          builders_risk: {
            heading: "Builder's Risk",
            crumbs: "Builder's Risk",
            content: [
              {
                heading: "What is Builder's Risk",
                pre_subheading: 'Builder’s Risk coverage protects your materials and supplies during the construction process. It also covers your property in transit as well as at a temporary location where it will be stored.',
                subheading: [],
                side_image: "/img/construction.jpeg"
              },
              {
                heading: "How does it work?",
                pre_subheading: "Not only does builder’s risk coverage protect against direct loss to a building under construction, it also helps insure a contractor’s profit. Standard builder’s risk coverage includes:",
                subheading: [
                  " financial loss resulting from new zoning regulations or laws",
                  " most equipments during testing",
                  " temporary structures, scaffolding, and shrubs",
                  " valuable papers",
                  " the first $100,000 of debris removal",
                  " site preparation, including re-excavating a foundation or re-grading land."
                ]
              }
            ]
          },
          employment_practice: {
            heading: "Employment Practice Liability Insurance",
            crumbs: "Employment Practice Liability",
            content: [
              {
                heading: "How it works?",
                pre_subheading: 'Most EPLI policies also contain a provision that is sometimes referred to as a ‘hammer’ clause. Hammer clauses give the carrier the right to recommend settlement. If an employer does not follow the recommendation, the carrier’s liability is limited to the amount recommended. Some hammer clauses allow the carrier to force the case into arbitration, mediation, or other alternative dispute resolution mechanisms.',
                subheading: [],
                side_image: "/img/employee.jpg"
              },
              {
                heading: "",
                pre_subheading: '',
                subheading: [
                  "Under this coverage, the carrier's duty to defend typically arises regardless of " +
                  "whether the deductible, or amount of the employer's out-of-pocket expenses, has been met. " +
                  "With the duty to defend, comes the carrier's right to choose the counsel who will defend " +
                  "the company against the claim.",
                  "Most EPLI policies also contain a provision that is sometimes referred to as a 'hammer' clause. " +
                  "Hammer clause give the carrier the right to recommend settlement.  If an employer does " +
                  "not follow the recommendation, the carrier's liability is limited to the amount " +
                  "recommended.  Some hammer clause allow the carrier to force the case into arbitration, " +
                  "mediation, or other alternative dispute resolution mechanisms.",
                  "EPLI policies also share some of these features or characteristics:"
                ],
                side_image: "/img/contract.jpg"
              },
              {
                heading: "1. Covered Insurance",
                pre_subheading: 'All EPLI policies cover claims against the company (and sometimes its subsidiaries) and its directors, officers, and employees. However, some policies can include exclusions such as only covering claims against full-time employees. In addition, many policies exclude independent contractors from coverage. Employers should try to obtain the broadest coverage possible so that part-time, temporary, leased, and seasonal employees and independent contractors are also covered within their policy.',
                subheading: []
              },
              {
                heading: "2. Claims Covered",
                pre_subheading: '',
                subheading: [
                  "All EPLI policies cover civil judicial proceedings and virtually all " +
                  "cover arbitration and administrative proceedings (i. e. , proceedings " +
                  "before the Equal Employment Opportunity Commission or state equivalent). " +
                  "However, some policies also cover claims before litigation or the actual " +
                  "filing of a grievance or charge. For example, some policies cover a written " +
                  "demand for monetary or non-monetary relief, threat of legal action or a " +
                  "request to toll the statute of limitations. Depending on the size of the " +
                  "company and its financial resources, a company may wish to opt for an EPLI " +
                  "policy that is expansive in the kinds of claims covered."
                ]
              },
              {
                heading: "3. Person Bringing Covered Claim",
                pre_subheading: 'All EPLI policies cover claims brought by current full-time employees. Some policies also cover claims by current part-time, temporary, or seasonal employees. Some even go further and offer coverage for applicants for employment and former employees (full-time, part-time, temporary, or seasonal). Still others afford greater coverage and cover claims brought on by the EEOC ‘on behalf of’ employees. Employers should examine their workforces to determine which type of policy will best meet their needs.',
                subheading: []
              },
              {
                heading: "4. Wrongful Acts Covered",
                pre_subheading: '',
                subheading: [
                  "Almost every EPLI policy covers claims of wrongful termination of " +
                  "employment, workplace harassment and discrimination. Many offer a " +
                  "more comprehensive list of covered acts, which may include the new " +
                  "employment torts, including negligent hiring/supervision/evaluations, " +
                  "invasion of privacy, defamation and intentional infliction of emotional " +
                  "distress. Employers should compare EPLI policies for the most comprehensive " +
                  "policy in terms of the wrongful acts covered."
                ]
              },
              {
                heading: "5. Practices or Acts Excluded",
                pre_subheading: '',
                subheading: [
                  "Most EPLI policies exclude claims based on, arising from or in way " +
                  "related to the Fair Labor Standards Acts (with the possible exception " +
                  "of Equal Pay Act provisions), the National Labor Relations Act, the " +
                  "Worker Adjustment and Retraining Notification Act (WARN), and claims " +
                  "arising out of downsizing, layoffs, workforce restructurings, plant " +
                  "closures or strikes; the Consolidated Omnibus Budget Reconciliation " +
                  "Act of 1985 (COBRA); the Employee Retirement Income Security Act (ERISA); " +
                  "the Occupational Safety and Health Act (OSHA); and the costs associated " +
                  "with providing 'reasonable accommodation' under the Americans with " +
                  "Disabilities Act (ADA) to disabled employees or costs associated with " +
                  "modifying facilities to make them accessible to the disabled. These are " +
                  "considered to be risks that companies are better able to control. Most " +
                  "EPLI policies also contain exclusions for criminal acts, fraud, illegal " +
                  "profit or advantage, purposeful violation of law, wrongful acts committed " +
                  "with actual knowledge of their wrongful nature or with intent to cause " +
                  "damage and other egregious conduct."
                ]
              },
              {
                pre_heading: "Things to consider when buying an EPLI Policy?",
                subheading: []
              },
              {
                heading: "1. Choose an Established Carrier",
                pre_subheading: '',
                subheading: [
                  "Evaluate EPLI carriers based on their experience and financial strength. A low premium will not be the bargain it seemed if the carrier leaves the marketplace. It is better to go with an established carrier that is committed to the EPLI product for the long term. Bottom line: You should get considerable background information about any carrier and the underwriter writing the policy whenever possible. If the carrier is new to EPLI, it might be a good idea to consider another."
                ]
              },
              {
                heading: "2. Buyer Beware",
                pre_subheading: '',
                subheading: [
                  "An investigation into and analysis of your EPLI needs is absolutely necessary before any purchase. Do not expect underwriters to see every eventuality for you. Make sure that you can live with the claims definition and exclusions in the policy. Seek advice early if you are unsure what your needs are."
                ]
              },
              {
                heading: "3. Be able to choose your own lawyer and settle when you want.",
                pre_subheading: '',
                subheading: [
                  "Choosing your own lawyer may or may not be important to you. If it is important, make sure that you address it with the carrier up front. If your attorney is experienced in employment law, the insurer should readily accommodate your request. If not, you may be forced to use panel counsel. Before accepting the insurer's panel counsel, you should find out whether the panel attorneys limit their practice to employment law, which is a very specialized area. You also will want to maintain some control over the settlement of claims because settling too quickly can cause complaints to multiply in the workplace."
                ]
              }
            ]
          },
          ocean_marine: {
            heading: "Ocean Marine",
            crumbs: "Ocean Marine",
            content: [
              {
                heading: "What is Ocean Marine Insurance?",
                pre_subheading: "Ocean marine contracts are written to cover four major types of property interest:",
                subheading: [
                  "The vessel or hull",
                  "The cargo",
                  "The freight revenue to be received by the ship owner",
                  "Legal liability for negligence of the shipper or the carrier",

                ],
                side_image: "/images/about/about-img3.jpg"
              },
              {
                heading: "What does it protect?",
                pre_subheading: 'This coverage is designed to protect shipments of goods in foreign trade, particularly exported or imported by an ocean vessel or as air cargo',
                subheading: [
                ],
                side_image: "/images/about/about-img3.jpg"
              },
              {
                heading: "How does it work?",
                pre_subheading: 'Ocean cargo provides broad coverage that includes damages caused by stranding, sinking, fire,' +
                ' collision, theft, and severe weather.  It automatically covers goods shipped by air or sea, from the start of the ' +
                'shipment from the warehouse to the destination point as well as the transits by rail and trucks used between the two ' +
                'points.  Optional coverages are also available to protect against damage or loss to your property that results from collision, ' +
                'loading and unloading, and mechanical breakdown.',
                subheading: [
                ],
                side_image: "/images/about/about-img3.jpg"
              }
            ]
          },
          inland_marine: {
            heading: "Inland Marine",
            crumbs: "Inland Marine",
            content: [
              {
                heading: "What is Inland Marine Insurance?",
                pre_subheading: "This broad type of coverage was developed for shipments that do not involve ocean transport. " +
                " The insurance covers articles in transit by all forms of land and air transportation as well as bridges, tunnels, and " +
                "other means of transportation and communication.  Insurance that covers expensive personal items such as fine art and jewelry " +
                "are included in this category.",
                subheading: [


                ],
                side_image: "/images/about/about-img3.jpg"
              },
              {
                heading: "What are the coverage?",
                pre_subheading: 'Inland marine policies become known as "floaters" since the property to which coverage was originally ' +
                'extended was essentially "floating." The coverage has grown to include property that just involves as element of ' +
                'transportation. The property that is insured under inland marine coverage is typically one of the following:',
                subheading: [
                  "Actually in transit",
                  "Held by a bailee",
                  "At a fixed location that is an instrument of transportation",
                  "A movable type of goods that is often at different locations"
                ],
                side_image: "/images/about/about-img3.jpg"
              },
              {
                heading: "",
                pre_subheading: "The following coverages represent a wide range of the types of coverages typically called " +
                "'inland marine':",
                subheading: [
                  "Account Receivable",
                  "Bailee Customer's Goods",
                  "Builders' Risk",
                  "Communication Towers and Equipment",
                  "Computer Coverage",
                  "Contractors Equipment",
                  "Commercial Floaters",
                  "Dealers",
                  "Exhibitions",
                  "Fine Arts",
                  "Furriers",
                  "Installation",
                  "Jewelers",
                  "Lease Property",
                  "Mobile Medical Equipment",
                  "Motor Truck Cargo",
                  "Museums",
                  "Musical Instruments",
                  "Processing Risks",
                  "Rigger's Liability",
                  "Scheduled Property",
                  "Transportation",
                  "Trip Transit",
                  "Valuable Papers",
                  "Warehouse Legal"
                ],
                side_image: "/images/about/about-img3.jpg"
              }
            ]
          },
          excess_liability: {
            heading: "Excess Liability",
            crumbs: "Excess Liability",
            content: [
              {
                heading: "What is excess liability?",
                pre_subheading: 'Excess Liability Insurances are coverage that is written in excess of a primary insurance',
                subheading: [
                  "It is designed to increase the limits of liability, thereby providing catastrophe coverage.  Excess liability coverage does not respond to a loss until the amount " +
                  "of the loss exceeds (or exhausts) any existing primary policy limits."
                ],
                side_image: "/images/about/about-img3.jpg"
              },
              {
                heading: "Example:",
                pre_subheading: 'A primary $500,000 liability policy is written and excess insurance is written for $2 million excess of the primary.  The primary policy would pay all ' +
                'losses within $500,000 and the excess policy would pay losses in excess of the primary coverage, up to the excess policy limit of $2 million.  In addition, ' +
                'excess liability insurance coverage also provides the following:',
                subheading: [
                  "Protection for covered claims by others for personal injury or property damage caused by the policyholder, the policyholder's family/friends, " +
                  "or hazards on the policyholder's property for which they are legally liable",
                  "Personal liability coverage for occurrences on or off your premises",
                  "An additional layer of protection above your primary auto policy against auto-related liabilities",
                  "Protection against non-business related personal injury liabilities such as slander, libel, wrongful eviction, or false arrest",
                  "Legal defense costs for a covered loss.  Lawyer fees and associated cour costs are covered",
                  "World wide coverage - no matter where you go, with the only exception being situations involving foreign ownership of dwellings or cars."
                ],
                side_image: "/images/about/about-img3.jpg"
              }
            ]
          },
          foreign_liability: {
            heading: "Foreign Liability",
            crumbs: "Foreign Liability",
            content: [
              {
                heading: "What is foreign liability?",
                pre_subheading: 'Provides coverage for claims made outside the territorial limits of other liability policy.  Coverage is usually needed ' +
                'only for regular or permanent operations outside of the US, its territories, or Canada.',
                subheading: [
                  "This coverage is targeted for clients whose physical place of operation is within the United States, but are engaged in the exporting of " +
                  "their products or services to other countries.",
                  "Coverage provides for reimbursement of third party damages sustained including defense expenses associated with claims filed in " +
                  "other countries.  Coverage is provided using our proprietary form or ISO worldwide coverage forms."
                ],
                side_image: "/images/about/about-img3.jpg"
              },
              {
                heading: "What will be covered in the foreign liability?",
                pre_subheading: '',
                subheading: [
                  "Foreign liability covers any liability the institution incurs when its officers, employees, or agents travel to foreign countries. " +
                  "The insurance provides broad coverage for bodily injury and property damage including: foreign automobile liability, " +
                  " medical payments, fire legal liability coverage for real estate property, and employee benefits liability. " +
                  "Foreign liability does not cover professional liability or contractual liability. Repatriation coverage includes medical evacuation " +
                  "of state employees to the nearest good medical facility and return of the state employee’s body to the United States in the event of death. " +
                  "Some foreign countries are excluded by the State’s policy; in those cases, the State is self-insured for this exposure."
                ],
                side_image: "/images/about/about-img3.jpg"
              }
            ]
          }
        }
      }
    }
  }
</script>

