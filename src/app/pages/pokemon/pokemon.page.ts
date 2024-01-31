import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PokeapiService } from 'src/app/services/pokeapi/pokeapi.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

  pokemonId: string | null = null;
  pokemon: any = {};

  constructor(private activatedRoute: ActivatedRoute,
    private pokeapiService: PokeapiService,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.pokemonId = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.pokemonId !== null) {
      this.pokeapiService.getPokemon(this.pokemonId).then((pokemon: any) => {
        this.pokemon = pokemon;
      });
    } else {
      console.error('pokemonId é nulo. Certifique-se de definir um valor válido.');
    }
  }

  capturar() {
    this.navCtrl.navigateForward("pokebola", { queryParams: { pokemonId: this.pokemonId } });
  }


}
