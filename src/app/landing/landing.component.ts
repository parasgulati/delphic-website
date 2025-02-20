import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
   animations: [trigger('flip', [
          transition(':enter', [
              style({ transform: 'rotateY(90deg)', opacity: 0 }),
              animate('500ms ease-out', style({ transform: 'rotateY(0deg)', opacity: 1 }))
          ]),
          transition(':leave', [
              animate('0ms ease-in', style({ transform: 'rotateY(90deg)', opacity: 0 }))
          ])
      ]),
      trigger('flipAnimation', [
          // Animation for entering
          transition(':enter', [
              style({ transform: 'rotateY(90deg)', opacity: 0 }),
              animate('0.5s ease-out', style({ transform: 'rotateY(0)', opacity: 1 }))
          ]),
          // Animation for leaving
          transition(':leave', [
              animate('0.5s ease-in', style({ transform: 'rotateY(90deg)', opacity: 0 }))
          ])
      ])
      ]
})
export class LandingComponent {
 title = 'delphic_homePage';
    @ViewChild('regionCollapsible', { static: false }) regionCollapsible!: ElementRef;
    selectedRegion: string = 'Select Region';
    newsEventBn: string = "LOAD MORE";
    activeLink: string = 'home'; // Default active link
    icons: string[] = [];
    clickedRegionName: string = '';
    private currentIndex: number = 0;
    private intervalId: any;
    displayedIcons: string[] = [];
    colorChange: boolean = false;
    itemsPerPage: number = 3;
    itemsPerPageIndex: number = 0;
    eventsCopy: any[] = [];
    events: any[] = [
        {
            title: 'Annual Company Retreat',
            description: 'Join us for our annual retreat where we will discuss our goals and strategies for the upcoming year.',
            date: '15',
            monthYear: 'Dec,2024',
            venue: 'The Bellagio, Las Vegas',
            image: ['assets/approch-4.webp'], // Replace with your image path
            link: '#1',
            additionalInfo: '<p>This retreat will focus on team bonding and strategic planning.</p>'
        },
        {
            title: 'New Product Launch',
            description: 'We are excited to announce the launch of our new product that will revolutionize the industry.',
            date: '28',
            monthYear: 'Nov,2024',
            venue: 'Mandalay Bay Convention Center, Las Vegas',
            image: ['assets/img/Solutions.webp', 'assets/img/services1.jpg'], // Replace with your image path
            link: '#2',
            additionalInfo: '<p>Join us for a live demonstration and Q&A session.</p>'
        },
        {
            title: 'Community Service Day',
            description: 'Our team will be volunteering at local shelters to give back to the community. Join us!',
            date: '12',
            monthYear: 'Nov,2024',
            venue: 'Red Rock Casino Resort, Las Vegas',
            image: ['assets/img/apple-touch-icon.png'], // Replace with your image path
            link: '#3',
            additionalInfo: '<p>Help us make a difference in our community!</p>'
        },
        {
            title: 'Quarterly Business Review',
            description: 'We invite all stakeholders to join us for our quarterly business review to assess our progress.',
            date: '01',
            monthYear: 'Nov,2024',
            venue: 'The Smith Center for the Performing Arts, Las Vegas',
            image: ['assets/img/services1.jpg'], // Replace with your image path
            link: '#4',
            additionalInfo: '<p>This meeting will cover financial performance and future strategies.</p>'
        },
        {
            title: 'Summer Networking Event',
            description: 'Connect with industry leaders and peers at our summer networking event. Don’t miss out!',
            date: '20',
            monthYear: 'Oct,2024',
            venue: 'Convention Center, Las Vegas',
            image: ['assets/img/Solutions.webp'], // Replace with your image path
            link: '#5',
            additionalInfo: '<p>Enjoy refreshments while networking with top professionals.</p>'
        }
    ];
    regions: any[] = [
        {
            name: 'South Asia',
            accountsHref: "mailto:accounts@delphic.in",
            acountsMailId: "accounts@delphic.in",
            infoHref: "mailto:info@delphic.in",
            infoMailId: "info@delphic.in",
            icon: 'fa-duotone fa-solid fa-earth-asia',
            show: false,
            branches: [
                {
                    name: 'India',
                    address: 'A- 141, Ground Floor, Block C, Sector 41, Noida, Uttar Pradesh 201301, India',
                    hq: "HQ",
                    email: "sales@delphic.in",
                    phone: "+91-7900739027"
                }
            ],
            services: [
                { heading: "Resource Outsourcing", icon: "fa fa-shield-alt text-white", service: "We provide contractual resources in all technologies (Staff Augmentation)." },
                { heading: "Customized Development", icon: "fa fa-desktop text-white", service: "We can develop reliable, scalable and secure software solutions." },
                { heading: "Customized ERP & CRM Solutions", icon: "fa fa-code text-white", service: "We offer full-range of ERP and CRM solutions." },
                { heading: "Technical Helpdesk / Support Services", icon: "fab fa-android text-white", service: "Our dedicated technical team is available 24*7 to support your customers queries." },
                { heading: "Upgradation & Migration Services", icon: "fa fa-forward text-white", service: "We are experienced and well equipped in Devops and Migration services." }
            ]
        },
        {
            name: 'South East Asia',
            icon: 'fas fa-globe-asia',
            accountsHref: "mailto:accounts@delphic.my",
            acountsMailId: "accounts@delphic.my",
            infoHref: "mailto:info@delphic.my",
            infoMailId: "info@delphic.my",
            show: false,
            branches: [
                {
                    name: 'Malaysia',
                    address: 'No. 3, Jalan Perdana 6/13, Pandan Perdana, 55300, Kuala Lumpur, Malaysia',
                    hq: "RO",
                    email: " sales@delphic.my",
                    phone: "+60-173392600"
                }
            ],
            services: [
                { heading: "Resource Outsourcing", icon: "fa fa-shield-alt text-white", service: "We provide contractual resources in all technologies (Staff Augmentation)." },
                { heading: "Customized Development", icon: "fa fa-chart-pie text-white", service: "We can develop reliable, scalable and secure software solutions." },
                { heading: "Customized ERP & CRM Solutions", icon: "fa fa-code text-white", service: "We offer full-range of ERP and CRM solutions." },
                { heading: "Technical Helpdesk / Support Services", icon: "fab fa-android text-white", service: "Our dedicated technical team is available 24*7 to support your customers queries." },
                { heading: "Upgradation & Migration Services", icon: "fa fa-search text-white", service: "We are experienced and well equipped in Devops and Migration services." }
            ]
        },
        {
            name: 'Middle East',
            icon: 'fas fa-globe-asia',
            accountsHref: "mailto:accounts@delphic.my",
            acountsMailId: "accounts@delphic.my",
            infoHref: "mailto:info@delphic.my",
            infoMailId: "info@delphic.my",
            show: false,
            branches: [
                {
                    name: 'United Arab Emirates',
                    address: 'Street: 14, 129 Street, Dubai, United Arab Emirates',
                    hq: "RO",
                    email: " sales@delphic.my",
                    phone: "+60-173392600"
                }
            ],
            services: [
                { heading: "Resource Outsourcing", icon: "fa fa-shield-alt text-white", service: "We provide contractual resources in all technologies (Staff Augmentation)." },
                { heading: "Customized Development", icon: "fa fa-chart-pie text-white", service: "We can develop reliable, scalable and secure software solutions." },
                { heading: "Customized ERP & CRM Solutions", icon: "fa fa-code text-white", service: "We offer full-range of ERP and CRM solutions." },
                { heading: "Technical Helpdesk / Support Services", icon: "fab fa-android text-white", service: "Our dedicated technical team is available 24*7 to support your customers queries." },
                { heading: "Upgradation & Migration Services", icon: "fa fa-search text-white", service: "We are experienced and well equipped in Devops and Migration services." }
            ]
        },
        {
            name: 'North America',
            icon: 'fas fa-globe-asia',
            accountsHref: "mailto:accounts@delphic.my",
            acountsMailId: "accounts@delphic.my",
            infoHref: "mailto:info@delphic.my",
            infoMailId: "info@delphic.my",
            show: false,
            branches: [
                {
                    name: 'United States',
                    address: '1845 25th St San Francisco, California(CA), 94107',
                    hq: "RO",
                    email: " sales@delphic.my",
                    phone: "+60-173392600"
                },
                {
                    name: 'Canada',
                    address: '2019 Maria St, Burlington, Ontario, L7R 2G6',
                    hq: "RO",
                    email: " sales@delphic.my",
                    phone: "+60-173392600"
                }
            ],
            services: [
                { heading: "Resource Outsourcing", icon: "fa fa-shield-alt text-white", service: "We provide contractual resources in all technologies (Staff Augmentation)." },
                { heading: "Customized Development", icon: "fa fa-chart-pie text-white", service: "We can develop reliable, scalable and secure software solutions." },
                { heading: "Customized ERP & CRM Solutions", icon: "fa fa-code text-white", service: "We offer full-range of ERP and CRM solutions." },
                { heading: "Technical Helpdesk / Support Services", icon: "fab fa-android text-white", service: "Our dedicated technical team is available 24*7 to support your customers queries." },
                { heading: "Upgradation & Migration Services", icon: "fa fa-search text-white", service: "We are experienced and well equipped in Devops and Migration services." }
            ]
        },
        {
            name: 'North East Asia',
            icon: 'fas fa-globe-asia',
            accountsHref: "mailto:accounts@delphic.my",
            acountsMailId: "accounts@delphic.my",
            infoHref: "mailto:info@delphic.my",
            infoMailId: "info@delphic.my",
            show: false,
            branches: [
                {
                    name: 'Japan',
                    address: '19-1, Shinjuku 2-chome, Shinjuku-ku, Tokyo',
                    hq: "RO",
                    email: " sales@delphic.my",
                    phone: "+60-173392600"
                },
                {
                    name: 'Russia',
                    address: '1, Presnenskiy Val Street, Presnensky District, Moscow, 123022',
                    hq: "RO",
                    email: " sales@delphic.my",
                    phone: "+60-173392600"
                }
            ],
            services: [
                { heading: "Resource Outsourcing", icon: "fa fa-shield-alt text-white", service: "We provide contractual resources in all technologies (Staff Augmentation)." },
                { heading: "Customized Development", icon: "fa fa-chart-pie text-white", service: "We can develop reliable, scalable and secure software solutions." },
                { heading: "Customized ERP & CRM Solutions", icon: "fa fa-code text-white", service: "We offer full-range of ERP and CRM solutions." },
                { heading: "Technical Helpdesk / Support Services", icon: "fab fa-android text-white", service: "Our dedicated technical team is available 24*7 to support your customers queries." },
                { heading: "Upgradation & Migration Services", icon: "fa fa-search text-white", service: "We are experienced and well equipped in Devops and Migration services." }
            ]
        },
        {
            name: 'Australia',
            icon: 'fas fa-globe-asia',
            accountsHref: "mailto:accounts@delphic.my",
            acountsMailId: "accounts@delphic.my",
            infoHref: "mailto:info@delphic.my",
            infoMailId: "info@delphic.my",
            show: false,
            branches: [
                {
                    name: 'Australia',
                    address: '16/18 Mort St, Canberra ACT 2601, Australia',
                    hq: "RO",
                    email: " sales@delphic.my",
                    phone: "+60-173392600"
                },
                {
                    name: 'New Zealand',
                    address: '83A The Strand, Whakatane Bay of Plenty 5810',
                    hq: "RO",
                    email: " sales@delphic.my",
                    phone: "+60-173392600"
                }
            ],
            services: [
                { heading: "Resource Outsourcing", icon: "fa fa-shield-alt text-white", service: "We provide contractual resources in all technologies (Staff Augmentation)." },
                { heading: "Customized Development", icon: "fa fa-chart-pie text-white", service: "We can develop reliable, scalable and secure software solutions." },
                { heading: "Customized ERP & CRM Solutions", icon: "fa fa-code text-white", service: "We offer full-range of ERP and CRM solutions." },
                { heading: "Technical Helpdesk / Support Services", icon: "fab fa-android text-white", service: "Our dedicated technical team is available 24*7 to support your customers queries." },
                { heading: "Upgradation & Migration Services", icon: "fa fa-search text-white", service: "We are experienced and well equipped in Devops and Migration services." }
            ]
        },
        {
            name: 'North Europe',
            icon: 'fas fa-globe-asia',
            accountsHref: "mailto:accounts@delphic.my",
            acountsMailId: "accounts@delphic.my",
            infoHref: "mailto:info@delphic.my",
            infoMailId: "info@delphic.my",
            show: false,
            branches: [
                {
                    name: 'United Kingdom',
                    address: '15 Queen Street, London E84 7TL',
                    hq: "RO",
                    email: " sales@delphic.my",
                    phone: "+60-173392600"
                }
            ],
            services: [
                { heading: "Resource Outsourcing", icon: "fa fa-shield-alt text-white", service: "We provide contractual resources in all technologies (Staff Augmentation)." },
                { heading: "Customized Development", icon: "fa fa-chart-pie text-white", service: "We can develop reliable, scalable and secure software solutions." },
                { heading: "Customized ERP & CRM Solutions", icon: "fa fa-code text-white", service: "We offer full-range of ERP and CRM solutions." },
                { heading: "Technical Helpdesk / Support Services", icon: "fab fa-android text-white", service: "Our dedicated technical team is available 24*7 to support your customers queries." },
                { heading: "Upgradation & Migration Services", icon: "fa fa-search text-white", service: "We are experienced and well equipped in Devops and Migration services." }
            ]
        },
        {
            name: 'South Europe',
            icon: 'fas fa-globe-asia',
            accountsHref: "mailto:accounts@delphic.my",
            acountsMailId: "accounts@delphic.my",
            infoHref: "mailto:info@delphic.my",
            infoMailId: "info@delphic.my",
            show: false,
            branches: [
                {
                    name: 'Italy',
                    address: 'Via Varrone 100, Catania, 95124',
                    hq: "RO",
                    email: " sales@delphic.my",
                    phone: "+60-173392600"
                }
            ],
            services: [
                { heading: "Resource Outsourcing", icon: "fa fa-shield-alt text-white", service: "We provide contractual resources in all technologies (Staff Augmentation)." },
                { heading: "Customized Development", icon: "fa fa-chart-pie text-white", service: "We can develop reliable, scalable and secure software solutions." },
                { heading: "Customized ERP & CRM Solutions", icon: "fa fa-code text-white", service: "We offer full-range of ERP and CRM solutions." },
                { heading: "Technical Helpdesk / Support Services", icon: "fab fa-android text-white", service: "Our dedicated technical team is available 24*7 to support your customers queries." },
                { heading: "Upgradation & Migration Services", icon: "fa fa-search text-white", service: "We are experienced and well equipped in Devops and Migration services." }
            ]
        },
        {
            name: 'West Europe',
            icon: 'fas fa-globe-asia',
            accountsHref: "mailto:accounts@delphic.my",
            acountsMailId: "accounts@delphic.my",
            infoHref: "mailto:info@delphic.my",
            infoMailId: "info@delphic.my",
            show: false,
            branches: [
                {
                    name: 'Germany',
                    address: 'Budapester Strasse 7, Barenburg, Niedersachsen, 27245',
                    hq: "RO",
                    email: " sales@delphic.my",
                    phone: "+60-173392600"
                },
                {
                    name: 'Switzerland',
                    address: 'Wolfensbergstrasse 83, Riein, 7128',
                    hq: "RO",
                    email: " sales@delphic.my",
                    phone: "+60-173392600"
                }
            ],
            services: [
                { heading: "Resource Outsourcing", icon: "fa fa-shield-alt text-white", service: "We provide contractual resources in all technologies (Staff Augmentation)." },
                { heading: "Customized Development", icon: "fa fa-chart-pie text-white", service: "We can develop reliable, scalable and secure software solutions." },
                { heading: "Customized ERP & CRM Solutions", icon: "fa fa-code text-white", service: "We offer full-range of ERP and CRM solutions." },
                { heading: "Technical Helpdesk / Support Services", icon: "fab fa-android text-white", service: "Our dedicated technical team is available 24*7 to support your customers queries." },
                { heading: "Upgradation & Migration Services", icon: "fa fa-search text-white", service: "We are experienced and well equipped in Devops and Migration services." }
            ]
        }
        // Additional regions can be added here
    ];
    navItems: { label: string, link: string, id: string, target?: string }[] = [
        { label: 'Home', id: 'home-nav', link: '#home' },
        { label: 'About', id: 'about-nav', link: '#about' },
        { label: 'Services', id: 'services-nav', link: '#services' },
   //     { label: 'Blog', id: 'blog-nav', link: 'blog' },
   //     { label: 'Gallery', id: 'gallery-nav', link: 'gallery' },
    //    { label: 'Carrers', id: 'careers-nav', link: 'https://www.linkedin.com/jobs/search/?currentJobId=3792529272&f_C=79698771&geoId=92000000&location=Worldwide&origin=JOB_SEARCH_PAGE_SEARCH_BUTTON&refresh=true', target: '_blank' },
        { label: 'Contact', id: 'contact-nav', link: '#contact' }
    ];
    selectedObj: any;

    constructor(private sanitizer: DomSanitizer, private router: Router) {
        for (let i = 1; i <= 48; i++) {
            this.icons.push(`assets/img/clients/client-${i}.png`);
        }
        this.updateDropdown('South Asia')
    }

    sanitizedAdditionalInfo(item: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(item);
    }

    ngOnInit(): void {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const sectionId = entry.target.id;
                    const client = entry.target.id === 'clients';
                    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                    navLink?.classList.toggle('active', entry.isIntersecting);
                    if (entry.isIntersecting) {
                        this.activeLink = entry.target.id; // Set active section based on intersection
                      }
                    const targetSection = document.getElementById('clients');
                    if (client && targetSection) {
                        this.colorChange = true;
                    }
                    else {
                        this.colorChange = false;
                    }
                });
            },
            { threshold: 0.5 }
        );

        const sectionIds = ['home', 'about', 'why-choose-us', 'services', 'contact', 'footer', 'clients'];

        // Observe each section dynamically
        sectionIds.forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });
        this.loadMoreEvents();
        this.updateDisplayedIcons();
        this.intervalId = setInterval(() => this.triggerFlipEffect(), 3000); // Update every 3 seconds
    }

    private updateDisplayedIcons(): void {
        const iconsPerFlip = 12;
        this.displayedIcons = this.icons.slice(this.currentIndex, this.currentIndex + iconsPerFlip);

        // Loop back to the start if we reach the end
        if (this.currentIndex + iconsPerFlip >= this.icons.length) {
            this.currentIndex = 0;
        } else {
            this.currentIndex += iconsPerFlip;
        }
    }

    private triggerFlipEffect(): void {
        const wrappers = document.querySelectorAll('.icon-wrapper'); // Select all wrappers
        wrappers.forEach((wrapper) => wrapper.classList.add('flipping'));

        // Remove the flipping class after the animation duration
        setTimeout(() => {
            wrappers.forEach((wrapper) => wrapper.classList.remove('flipping'));
            this.updateDisplayedIcons();
        }, 600); // Match the duration of the transition
    }

    scrollToSection(sectionId: string) {
        // Navigate to the current route with skipLocationChange
        this.router.navigate([], { skipLocationChange: true }).then(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    loadMoreEvents(): void {
        if (this.itemsPerPageIndex < this.events.length) {
            const nextEvents = this.events.slice(this.itemsPerPageIndex, this.itemsPerPageIndex + this.itemsPerPage);
            this.eventsCopy.push(...nextEvents);
            this.itemsPerPageIndex += this.itemsPerPage;
            this.newsEventBn = "LOAD MORE"
            // Optionally handle when there are no more events to load
            if (this.itemsPerPageIndex >= this.events.length) {
                this.newsEventBn = ""
            }
        }
    }

    setActiveLink(link: string) {
        this.activeLink = link;
    }

    updateDropdown(region: string): void {
        this.selectedRegion = region;
        this.regions.forEach(x => {
            if (x.name === this.selectedRegion)
                this.selectedObj = x;
        })
    }

    isSelected(region: string): boolean {
        return this.selectedRegion === region;
    }

    toggleRegion(regionName: string) {
        let regionFound = false;

        this.regions.forEach(region => {
            if (region.name === regionName) {
                region.show = !region.show;
                this.clickedRegionName = region.show ? region.name : '';
                regionFound = true;
            } else {
                region.show = false;
            }
        });

        // If the region was not found, reset clickedRegionName
        if (!regionFound) {
            this.clickedRegionName = '';
        }
    }

    selectedEvent: any;

    openModal(event: any): void {
        this.selectedEvent = event;
    }

    ngOnDestroy() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
}
