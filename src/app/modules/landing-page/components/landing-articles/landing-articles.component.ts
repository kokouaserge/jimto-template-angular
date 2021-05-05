import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-articles',
  templateUrl: './landing-articles.component.html',
  styleUrls: ['./landing-articles.component.css']
})
export class LandingArticlesComponent implements OnInit {


  articles :{img_src:string, title:string, content_text :string } []= [
    {
    title:'Comment rester compétitif grâce aux freelances',
    img_src:'https://images.prismic.io/malt/c50db29f-24dd-499d-a085-8e7f8562deab_Comment-rester-compe%CC%81titif.png?auto=compress,format&amp;rect=0,0,1111,640&amp;w=500&amp;h=288',
    content_text:'Découvrez les meilleures pratiques pour que votre collaboration avec un freelance soit un succès grâce à des exemples concrets et des témoignages d’entreprises.'

  },

  {
    title:'Freelancing &amp; Covid-19',
    img_src:'https://images.prismic.io/malt/bd2e95d2-a0c5-4128-b9e5-d69d7fd4a1b4_Etude-Freelancing-in-Europe-BCG%402x.png?auto=compress,format&amp;rect=0,0,1111,640&amp;w=500&amp;h=288',
    content_text:'Comment les freelances ont-ils vécu le confinement ? Que peuvent-ils apporter aux entreprises impactées par la crise ? Réponses dans cette étude menée avec le BCG.'

  },

  {
    title:'Malt Tech Trends 2021',
    img_src:'https://images.prismic.io/malt/70fbeb52-7606-4022-8dba-1202c98522cc_MaltTechTrends2021_Download.png?auto=compress,format&amp;rect=0,0,2199,1280&amp;w=500&amp;h=291',
    content_text:'Technologies émergentes, grandes tendances IT,  évolution des métiers tech. Explorez la nouvelle édition du Malt Tech Trends.'

  },
  

  ];
  constructor() { }

  ngOnInit(): void {
  }


  trackByFn(index, item) {
    return index;
  }

}
