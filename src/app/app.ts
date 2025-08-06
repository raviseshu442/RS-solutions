import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf ,NgFor} from '@angular/common'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgIf,NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('rtsolutions');
   showContact = false;
  tiles = [
    {
      title: 'Empowering Your Business with End-to-End Digital Solutions',
      heading: 'we don’t just build applications — we craft powerful, scalable, and intuitive solutions tailored to your business needs. From idea to implementation, our team specializes in developing robust web and mobile applications that solve real-world challenges and drive growth.',
      description:
        'We go beyond development — offering full-spectrum support, including Ongoing maintenance and updates Seamless cloud hosting and deployment Reliable technical support when you need it most',
      icon: 'https://img.icons8.com/color/48/graph.png',
    },
    {
      title: 'Personalized 1-on-1 Coaching to Empower Your Tech & Business Journey',
      heading: 'Unlock your full potential with our one-on-one coaching and mentoring programs designed for aspiring developers, entrepreneurs, and professionals. Whether youre just starting out or looking to sharpen your skills, we offer a personalized learning experience tailored to your pace, goals, and interests.',
      description:
        'What We Offer: Business Fundamentals — Learn how real-world businesses work, from strategy to execution. Programming Languages — Master in-demand languages and frameworks used by top tech companies. Databases — Gain hands-on experience with both SQL and NoSQL databases like MySQL, PostgreSQL, MongoDB, and more. Data Structures & Algorithms — Build a strong foundation for problem-solving, coding interviews, and scalable app development. With real-world insights, practical exercises, and ongoing support, we help you turn knowledge into confidence — and confidence into results.',
      icon: 'https://img.icons8.com/color/48/speed.png',
    },
    {
      title: 'Support',
      heading: 'Always Available',
      description:
        'Our support team is here for you 24/7 — ready to help with onboarding, troubleshooting, and anything in between.',
      icon: 'https://img.icons8.com/color/48/online-support.png',
    },
    {
      title: 'Insights',
      heading: 'Data-Driven Decisions',
      description:
        'Leverage real-time analytics to understand your users and make smarter, evidence-based business decisions.',
      icon: 'https://img.icons8.com/color/48/combo-chart.png',
    },
  ];

}
