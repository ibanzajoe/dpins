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
            <div class="col-sm-5 col-xs-12">
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
            <div class="col-sm-5 col-xs-12">
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
      business () {
        return this.businesses[this.$route.params.business]
      }
    },
    
    data () {
      return {
        businesses: {
          business_insurance: {
            heading: "Business Insurances",
            crumbs: "Business Insurances",
            content: [
              {
                heading: "Why do you need business insurance?",
                pre_subheading: '',
                subheading: [
                  "When running a business, you HAVE to consider your liabilities. Even if you don't have a big, prosperous, business, liability insurance is essential and can be a crucial part of protecting your business and financial health.",
                  "Liability insurance covers employees and customer injuries that may occur at your place of business. Even in cases where someone you are not associated with causes someone else injury at your place of business, your business may still be held liable for damages. Liability insurance can cover you from such claims of personal injury as well as any other claims involving any type of abuse and sexual harassment."
                ],
                side_image: "/images/about/about-img3.jpg"
              },
              {
                heading: "What are the different types of business insurances (commonly used)?",
                pre_subheading: 'There are various liabilities insurance for businesses. General liabilities insurance protects you from most business associated injuries and accidents. Professional liabilities are often used because they are legal requirements that are needed to operate the business. It protects you from claims of your clients who may have suffered losses from your malpractice, professional advice, errors and/or negligence. Product liabilities protects your business from potential problems caused by your product. Customers may use your product improperly that may have potential risks. The amount of coverage vary depending on what products and/or services your business serves. Some business liability insurances include:',
                subheading: [
                  "Commercial General Liability Insurance (CGPL)",
                  "Business Automobile Policy (BAP)",
                  "Employers Liability and Workers Compensation",
                  "Manufacturers and Contractors Liabilities (M&C)",
                  "Owners, Landlords, and Tenants Liability Insurance Policy (OL&T)",
                  "Physicians, Surgeons, and Dentists Professional Liability"
                ],
                side_image: "/images/about/about-img4.jpg"
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
                side_image: "/images/about/about-img3.jpg"
              },
              {
                heading: "How does it work?",
                pre_subheading: '',
                subheading: [
                  "California's workers' compensation act provides an example of a comprehensive state compensation program. It is applicable to most employers. The statue limits the liability of the employer and fellow employees. California also requires employers to obtain insurance to cover potential workers' compensation claims, and sets up a fund claims that employers have illegally failed to insure against."
                ],
                side_image: "/images/about/about-img4.jpg"
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
                side_image: "/images/about/about-img3.jpg"
              },
              {
                heading: "When do I need Errors and Omissions Insurance?",
                pre_subheading: '',
                subheading: [
                  "Error and Omissions Insurance is generally recommended to be at the foundation of every company's insurance portfolio. It is usually wise to purchase the coverage prior to product launch or when you start servicing customers.",
                  "Coverage includes legal defense costs, no matter how baseless the allegations. With Error and Omission insurance, you will be reimbursed for any resulting judgement against you including the court cost, up to the coverage limits of your policy."
                ],
                side_image: "/images/about/about-img4.jpg"
              },
              {
                heading: "Why do I need Errors & Omissions Insurance?",
                pre_subheading: '',
                subheading: [
                  "Mistakes Happen. Every company messes up at some point. You can't be everywhere and sometimes you can't personally handle every job. Errors and Omissions coverage insures not only your mistakes, but the mistakes of your employees and independent contractors you hire as well.",
                  "Most Importantly: Errors and Omissions insurance can save you from extreme embarrassment, a lost client, and a bad reputation."
                ],
                side_image: "/images/about/about-img3.jpg"
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
                  "D&O Liability provides coverage for lawsuits that arise out of wrongful acts, or errors and omission-type claims. Examples of such claims under this policy would be: employment-related claims like negligent hiring practices or wrongful termination, acts beyond the authority of the league or chapter, wrongful suspension of players, coaches, or officials, selection and eligibility disputes, matters involving changes to, interpretation of, or implementation of rules, sexual harassment, and gender, racial, or ethnic discrimination.",
                  "If the officers of your chapter, league, or association is sued for these type of incidents, coverage for such claim would fall under the D&O policy."
                ],
                side_image: "/images/about/about-img3.jpg"
              },
              {
                heading: "",
                pre_subheading: "D&O insurance does not cover claims that arise out of bodily injury or proprety damage.  " +
                "Those types of incidents are specifically covered under the general liability policy.  If a board member " +
                "or director of a chapter or league official are sued because a player was severely injured, or because " +
                "a raveling team vandalized someone's property, those claims would be covered under the general liability policy.",
                subheading: [
                  "",
                  ""
                ],
                side_image: "/images/about/about-img4.jpg"
              },
              {
                heading: "Who is covered by D&O insurance?",
                pre_subheading: '',
                subheading: [
                  "The D&O policy protects the individual directors and officers of the chapter or league.  " +
                  "It also covers the chapter or league entity itself, as well as members of the chapter/league " +
                  "while acting in an offical capacity, such as coaches, managers, or volunteers"
                ],
                side_image: "/images/about/about-img3.jpg"
              },
              {
                heading: "Who should purchase the coverage?",
                pre_subheading: '',
                subheading: [
                  "US Lacrosse highly recommends that all chapters purchase D&O liability insurance to protect their " +
                  "board and cover their operations.  The coverage is also available to lacrosse officials' associations " +
                  "and to leagues who are comprised of US Lacrosse members."
                ],
                side_image: "/images/about/about-img4.jpg"
              }
            ]
          },
          builders_risk: {
            heading: "Builder's Risk",
            crumbs: "Builder's Risk",
            content: [
              {
                heading: "What is Builder's Risk",
                pre_subheading: '',
                subheading: [
                  "Builder's Risk Coverage protects your materials and supplies during the construction " +
                  "process.  It also covers your property in transit as well as at a temporary location where it will " +
                  "be stored"
                ],
                side_image: "/images/about/about-img3.jpg"
              },
              {
                heading: "How does it work?",
                pre_subheading: "Not only does builders risk coverage protect against direct loss to the building under construction, " +
                "it helps to insure a contractor profit.  The Hartford innovative builders risk coverage includes: ",
                subheading: [
                  " financial loss resulting from new zoning regulations or laws",
                  " most equipments during testing",
                  " temporary structures, scaffolding, and shrubs",
                  " valuable papers",
                  " the first $100,000 of debris removal",
                  " site preparation, including re-excavating a foundation or re-grading land."
                ],
                side_image: "/images/about/about-img4.jpg"
              }
            ]
          },
          employment_practice: {
            heading: "Employment Practice Liability Insurance",
            crumbs: "Employment Practice Liability",
            content: [
              {
                heading: "How it works?",
                pre_subheading: '',
                subheading: [
                  "Employment Practice Liability Insurance (EPLI) insures against " +
                  "liability arising from employment practices.  EPLI policies cover only " +
                  "claims that the employer knew about or should have known about and that the " +
                  "employer reported to the carrier during the coverage period.",
                  "EPLI policies vary from carrier to carrier.  most EPLI policies provide 'duty to defend' coverage, " +
                  "requiring the carrier to defend against claims brought under the policy."
                ],
                side_image: "/images/about/about-img3.jpg"
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
                side_image: "/images/about/about-img4.jpg"
              },
              {
                heading: "1. Covered Insurance",
                pre_subheading: '',
                subheading: [
                  "All EPLI policies cover claims against the company (and sometimes its subsidiaries) and " +
                  "its directors, officers, and employees.  However, some policies exclude coverage " +
                  "cover only claims against full-time employees.  In addition, many policies exclude " +
                  "independent contractors from coverage.  Employers should try to obtain the broadest coverage " +
                  "possible so that part-time, temporary, leased and seasonal employees and independent " +
                  "contractors also are covered. "
                ],
                side_image: "/images/about/about-img3.jpg"
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
                ],
                side_image: "/images/about/about-img4.jpg"
              },
              {
                heading: "3. Person Bringing Covered Claim",
                pre_subheading: '',
                subheading: [
                  "All EPLI policies cover claims brought by current full-time employees. " +
                  "Some policies also current part-time, temporary and seasonal employees. " +
                  "Some go even further and offer coverage for applicants for employment " +
                  "and former employees (full-time, part-time, temporary and seasonal). " +
                  "Still others afford greater coverage and cover claims brought by the " +
                  "EEOC 'on behalf of' employees. Employers should examine their " +
                  "workforces and determine which type of policy will best meet " +
                  "their needs."
                ],
                side_image: "/images/about/about-img3.jpg"
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
                ],
                side_image: "/images/about/about-img4.jpg"
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
                ],
                side_image: "/images/about/about-img3.jpg"
              },
              {
                pre_heading: "Things to consider when buying an EPLI Policy?",
                heading: "1. Choose an Established Carrier",
                pre_subheading: '',
                subheading: [
                  "Evaluate EPLI carriers based on their experience and financial strength. A low premium will not be the bargain it seemed if the carrier leaves the marketplace. It is better to go with an established carrier that is committed to the EPLI product for the long term. Bottom line: You should get considerable background information about any carrier and the underwriter writing the policy whenever possible. If the carrier is new to EPLI, it might be a good idea to consider another."
                ],
                side_image: "/images/about/about-img4.jpg"
              },
              {
                heading: "2. Buyer Beware",
                pre_subheading: '',
                subheading: [
                  "An investigation into and analysis of your EPLI needs is absolutely necessary before any purchase. Do not expect underwriters to see every eventuality for you. Make sure that you can live with the claims definition and exclusions in the policy. Seek advice early if you are unsure what your needs are."
                ],
                side_image: "/images/about/about-img3.jpg"
              },
              {
                heading: "3. Be able to choose your own lawyer and settle when you want.",
                pre_subheading: '',
                subheading: [
                  "Choosing your own lawyer may or may not be important to you. If it is important, make sure that you address it with the carrier up front. If your attorney is experienced in employment law, the insurer should readily accommodate your request. If not, you may be forced to use panel counsel. Before accepting the insurer's panel counsel, you should find out whether the panel attorneys limit their practice to employment law, which is a very specialized area. You also will want to maintain some control over the settlement of claims because settling too quickly can cause complaints to multiply in the workplace."
                ],
                side_image: "/images/about/about-img4.jpg"
              }
            ]
          }
        }
      }
    }
  }
</script>

