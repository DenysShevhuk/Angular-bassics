import { Component, OnInit } from '@angular/core';

export interface Materials {
  title: string;
  text: string;
  id?: number;
  src?: string;
}

export interface Conveniently {
  text: string;
  id?: number;
  src?: string;
}

export interface Work {
  text: string;
  id?: number;
  src?: string;
}

export interface Partners {
  text: string;
  id?: number;
  src?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  materials: Materials[] = [
    {
      src: 'https://www.dgagroupitalia.it/storage/uploads/2188/conversions/DUCATO-FURGONATO-thumb-jpg.jpg',
      title: 'Будівельне сміття',
      text: 'Вивеземо макулатуру, картон, газети, журнали і книги. Шредируем архів. Надамо акти про утилізацію, працюємо з фізичними та юридичними особами, оплата на рахунок або вашу карту. Ціна за кг залежить від типу макулатури і її обсягу. Подайте заявку, наші менеджери зв\'яжуться з вами, розрахують ціну і оформлять вивезення!',
      id: 1,
    },
    {
      src: 'https://www.autopartner-n.ru/uploads/image/peugeot/peugeot.jpg',
      title: 'Макулатура',
      text: 'Вивеземо макулатуру, картон, газети, журнали і книги. Шредируем архів. Надамо акти про утилізацію, працюємо з фізичними та юридичними особами, оплата на рахунок або вашу карту. Ціна за кг залежить від типу макулатури і її обсягу. Подайте заявку, наші менеджери зв\'яжуться з вами, розрахують ціну і оформлять вивезення!',
      id: 2,
    },
    {
      src: 'https://promavto.net/upload/iblock/5e0/izotermicheskie_furgony_promavto_isotherm2_anons.jpg',
      title: 'Поліетилен',
      text: 'Плівка мікс: сміттєві і технічні пакети, поліетиленові мішки, що вкривають матеріали, тепличних плівок з виробництва, магазину, приватного будинку і ін можуть бути вивезені сервісом Green utilization за винагороду. Ми дбайливо ставимося до навколишнього середовища і гарантуємо правильну переробку всіх видів плівки.',
      id: 3,
    },
    {
      src: 'https://i.pinimg.com/originals/9d/23/4c/9d234c83c781accd6e3e60154562862f.jpg',
      title: 'Пластик',
      text: 'Green utilization вивозить ПЕТ-пляшки від питних рідин за винагороду. Пляшковий ПЕТ може бути багаторазово перероблений і є цінною вторинною ресурсом. Green utilization дбайливо ставимося до навколишнього середовища і гарантує правильну переробку всіх видів вторинної сировини.',
      id: 4,
    },
  ];
  conveniently: Conveniently[] = [
    {
      src: 'https://ak.picdn.net/shutterstock/videos/11061659/thumb/4.jpg',
      text: 'Виконаємо роботу точно в термін',
      id: 1
    },
    {
      src: 'https://images03.military.com/sites/default/files/styles/full/public/2018-10/money_invest_18x12.png.jpg?itok=PyTpIIuc',
      text: ' Оптимізуємо витрати на вивезення сміття',
      id: 2
    },
    {
      src: 'http://gruzovoz73.ru/img/logo-docs.png',
      text: 'Наданомо всі закріваючі документи',
      id: 3
    },
    {
      src: 'https://kemdveri.ru/wp-content/uploads/2018/08/pay.jpg',
      text: 'Гнучка система тарифів і способи оплати',
      id: 3
    },
  ];
  work: Work[] = [
    {
      src: 'https://images.assetsdelivery.com/compings_v2/hvostik/hvostik1603/hvostik160300123.jpg',
      text: 'Отримуємо вашу заявку',
      id: 1
    },
    {
      src: 'https://png.pngtree.com/png-vector/20190119/ourlarge/pngtree-flat-setting--icon--vector-png-image_327523.jpg',
      text: 'Уточнюємо з вами всі деталі (час, місце і ваші умови)',
      id: 2
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNYRTpxd1FHG6tL-8iMfg_diFAc9B7eiHUPQ&usqp=CAU',
      text: 'Ви вибираєте зручний спосіб взаєморозрахунків',
      id: 3
    },
    {
      src: 'https://media.istockphoto.com/vectors/green-check-mark-icon-green-tick-symbol-round-checkmark-sign-vector-vector-id1159270056?k=6&m=1159270056&s=170667a&w=0&h=4_g6vOaLmUlOrqwgcVIDc_O7G2oGJZpWoUjB0F7jD_w=',
      text: 'Ми робимо свою роботу якісно і швидко',
      id: 3
    },
  ];
  partners: Partners[] = [
    {
      src: 'https://p0.zoon.ru/preview/CAIwfi9yRAsTOMVRAASA-g/640x427x85/0/1/d/5150053da0f3026404000007_51501df3c365f.jpg',
      text: 'Кафе та ресторани',
      id: 1
    },
    {
      src: 'https://static3.depositphotos.com/1006434/216/i/600/depositphotos_2169440-stock-photo-modern-supermarket-view.jpg' +
        '',
      text: 'Продуктові магазини та ринки',
      id: 2
    },
    {
      src: 'https://st3.depositphotos.com/1000746/16116/i/600/depositphotos_161163874-stock-photo-moscow-city-business-center.jpg',
      text: 'Бізнес центри',
      id: 3
    },
    {
      src: 'https://zak-kor.net/uploads/posts/2019-04/1554736178_crop.jpg',
      text: 'ОСББ',
      id: 3
    },
  ];

  ngOnInit(): void {
  }

}




