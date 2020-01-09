import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';


@IonicPage()
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage {
  groups: any = [];
  navClass: string = 'show_white';


  faq: any = [
    {
      question: "How can I pay for the vacation rental?",
      answer: "<p>Siebert Realty has a variety of payment options. We accept personal checks through our electronic E-Check feature for reservations at least 10 days out, and personal checks via mail if arrival time is at least 30 days out. We also accept cashier checks and money orders. You can pay via credit card (Visa, MasterCard, Discover) through our 3rd party processing company. The company has a $49.95 transaction fee for each process</p><br><br><p>For more payment information, please make sure to view details in your lease as well as our Guest Net once you book a beach home or condo.</p>"
    },
    {
      question: "Do you offer Travel Insurance?\n",
      answer: "<p>Yes! Siebert Realty does offer a travel insurance plan that protects your investment from unforeseen circumstances that prohibit you from being able to come on vacation or cause you to leave abruptly.  There is even protection for lost luggage, auto accidents, and job loss and much more.</p>\n" +
        "<br><p>Many people think that travel insurance is just for weather related interruptions.  The truth of the matter is that the vast majority of claims are for medical related issues that certainly were not planned for by the guests</p>\n" +
        "\t\t\t\t<p>This is an optional line item on your lease. Please view the policy brochure online from <a href=\"http://www.siebertguest.net/gn/Objs/2010_CSA.pdf\" target=\"_new\">CSA Travel Insurance </a>for complete details of the coverage. </p><br><br><p>For more payment information, please make sure to view details in your lease as well as our Guest Net once you book a beach home or condo.</p>"
    },
    {
      question: "What happens if I have to cancel my reservation?\n",
      answer: "<p>If you need to cancel a reservation, whether payment has been made or not, please contact our rental department at 877-422-2200. Further details will be provided based on your specific reservation and cancellation time frame.</p>"
    },
    {
      question: "What are the \"Standard Features\" that are available in Siebert Realty rental properties?",
      answer: "<p>All Siebert Realty rentals are fully furnished to ensure your satisfaction. The following are STANDARD FEATURES in every rental unless otherwise noted in property description:</p>\n" +
        "<ul>" +
        "   <li> Non-smoking </li>\n" +
        "   <li> Air Conditioning </li>\n" +
        "   <li> Fully Equipped Kitchen (Stove/Oven, Refrigerator, Dishwasher, Microwave, Coffee Maker, Toaster) </li>\n" +
        "   <li> Washer and Dryer </li>\n" +
        "   <li> Telephone </li>\n" +
        "   <li> TV </li>\n" +
        "   <li> DVD Player </li>\n" +
        "   <li> High Speed Internet Access </li>\n" +
        "   <li> Pillows and Bedspreads </li>\n" +
        "   <li> Fresh Sheets Provided with Beds Made </li>\n" +
        "   <li> Towel Sets Provided (# rental sleeps) </li>\n" +
        "   <li> Kitchen Towels & Bath Mats Provided </li>\n" +
        "   <li> Deck Furniture </li>\n" +
        "   <li> BBQ Grill (except condos) </li></ul>\n"
    },
    {
      question: "Are linens and towels provided? ",
      answer: "<p>Complimentary Linens with beds made are provided for all taxable guest reservations. In addition, towel sets for the total unit limit (bath towel, hand towel and wash cloth), a Kitchen Towel Set (2 towels), and a Bathmat for each Full Bath are provided.</p>"
    },
    {
      question: "Can I bring my pet?",
      answer: "<p>If the rental property accepts them, yes! Properties that accept pets will have that noted in the \"Amenities\" section of the property listing. Also, you can search for pet-specific rentals by selecting the \"pets\" checkbox in the search criteria in Advanced Search. There is a non-refundable pet fee of $100 per pet with a 2 pet limit if you decide to bring your furry friend. </p><br><br><p>Please note from Memorial Day to Labor Day, pets are only allowed on the beach before 10am and after 6pm and must be on a leash. </p>"
    },
    {
      question: "What is the phone number of the property I just rented? ",
      answer: "<p>Your phone number will be listed on your Check In packet or you can call the rental office at 866-721-6810 to get it in advance. </p>"
    },
    {
      question: "When and how do I check in?",
      answer: "<p>Check In time is 3pm. Come to our rental office at 601 Sandbridge Road. Upon arrival, you'll be given a Check In Packet containing your keys and information about our area. </p><br><br><p>During the summer, breeze through our Drive-Thru Check In. Also in the summer, we have extended hours and stay open until 7pm on Saturdays to help later arrivals. We also have a 24/hr lobby that is open all year round for those that arrive after hours. </p>"
    },
    {
      question: "When and how do I check out? ",
      answer: "<p>The latest Check Out time is 10am. Please return your keys to the rental office at 601 Sandbridge Road. Again, in the summer we will have a Drive Thru Check Out open for easy departure. There is also a Key Drop Box located in our 24/hr lobby for early departures </p>"
    },
    {
      question: "Why go to Sandbridge Beach? ",
      answer: "Sandbridge Beach, the premier vacation beach located in Southern Virginia Beach, is a perfect setting for a relaxing vacation. Guests of Sandbridge can expect to visit a large, expansive beach while staying in a rental that has all the comforts of home. From sunbathing, surfing, kayaking and fishing, to bird watching and taking strolls down the beach, Sandbridge provides the ultimate memorable vacation. It's even just a short drive to the Virginia Beach Boardwalk. Check out more about the area by visiting our Local Attractions page and Secrets of Sandbridge. "
    }
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public emailComposer: EmailComposer
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqPage');
    this.viewData();
  }

  viewData() {
    this.groups = [];
    for (var i = 0; i < this.faq.length; i++) {
      this.groups[i] = {
        name: this.faq[i].question,
        items: this.faq[i].answer,
        show: false
      };
    }
  }
  toggleGroup(group, id) {
    console.log("id", id);
    group.show = !group.show

    if (group.show == true) {
      // this.navClass = 'show_grey';
      document.getElementById("select_" + id).classList.add('show_grey');
    } else {
      // this.navClass = 'show_white';
      document.getElementById("select_" + id).classList.remove('show_grey');
    }

  }
  contact() {
    this.emailComposer.isAvailable().then((avaliable) => {
      if (avaliable) {
        console.log("avaliable sending email...");
      }
    });

    let email = {
      to: 'mail@siebert-realty.com',
      cc: 'mail@siebert-realty.com',
      bcc: ['john@doe.com'],

      subject: 'Faq',
      body: 'This is the mesage..',
      isHtml: true
    };
    // Send a text message using default options
    this.emailComposer.open(email);
  }
}
