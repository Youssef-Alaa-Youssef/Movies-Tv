import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  hideFooter = false;

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.url.subscribe((segments) => {
      const currentRoute = segments[segments.length - 1].path;
      // console.log(this.route.url)
      // console.log(segments)
      this.hideFooter = currentRoute === 'login' || currentRoute === 'register';
    });
  }
}
