import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public months = [
    {
      name: 'Hammer',
      desc: '"Deepwinter"',
      days: [
        {
          day: 31,
          name: 'MidWinter',
          desc: '',
          source: 'https://forgottenrealms.fandom.com/wiki/Midwinter',
        },
      ],
      length: 31,
    },
    {
      name: 'Alturiak',
      desc: '"The Claw of Winter" or "The Claws of the Cold"',
      days: [],
      length: 30,
    },
    {
      name: 'Ches',
      desc: '"The Claw of Sunsets"',
      days: [
        {
          day: 19,
          name: 'Spring Equinox',
          desc: 'First day of spring',
          source: 'https://forgottenrealms.fandom.com/wiki/Spring_Equinox',
        },
      ],
      length: 30,
    },
    {
      name: 'Tarsakh',
      desc: '"The Claw of Storms"',
      days: [
        {
          day: 31,
          name: 'Greengrass',
          desc: '',
          source: 'https://forgottenrealms.fandom.com/wiki/Greengrass',
        },
      ],
      length: 31,
    },
    {
      name: 'Mirtul',
      desc: '"The Melting"',
      days: [],
      length: 30,
    },
    {
      name: 'Kythorn',
      desc: '"The Time of Flowers"',
      days: [
        {
          day: 20,
          name: 'Summer Solstice',
          desc: '',
          source: 'https://forgottenrealms.fandom.com/wiki/Summer_Solstice',
        },
      ],
      length: 30,
    },
    {
      name: 'Flamerule',
      desc: '"Summertide"',
      days: [
        {
          day: 31,
          name: 'Midsummer',
          desc: '',
          source: 'https://forgottenrealms.fandom.com/wiki/Midsummer',
        },
        {
          day: 32,
          name: 'Shieldmeet',
          desc: '',
          source: 'https://forgottenrealms.fandom.com/wiki/Shieldmeet',
        },
      ],
      length: 32,
    },
    {
      name: 'Eleasis',
      desc: '"Highsun"',
      days: [],
      length: 30,
    },
    {
      name: 'Eleint',
      desc: '"The Fading"',
      days: [
        {
          day: 21,
          name: 'Autumn Equinox',
          desc: '',
          source: 'https://forgottenrealms.fandom.com/wiki/Autumn_Equinox',
        },
        {
          day: 31,
          name: 'Highharvestide',
          desc: '',
          source: 'https://forgottenrealms.fandom.com/wiki/Highharvestide',
        },
      ],
      length: 31,
    },
    {
      name: 'Marpenoth',
      desc: '"Leaffall"',
      days: [],
      length: 30,
    },
    {
      name: 'Uktar',
      desc: '"The Rotting"',
      days: [
        {
          day: 31,
          name: 'Feast of the Moon',
          desc: '',
          source: 'https://forgottenrealms.fandom.com/wiki/Feast_of_the_Moon',
        },
      ],
      length: 31,
    },
    {
      name: 'Nightal',
      desc: '"The Drawing Down"',
      days: [
        {
          day: 20,
          name: 'Winter Solstice',
          desc: '',
          source: 'https://forgottenrealms.fandom.com/wiki/Winter_Solstice',
        },
      ],
      length: 30,
    },
  ];

  public ngOnInit(): void {
    console.log(this.months);
  }

  public checkSpecialDay(month: any, i: number) {
    let check = false;
    if (month.days.length > 0)
      month.days.forEach((day: any) => {
        if (day.day === i) check = true;
      });

    return check;
  }
}
