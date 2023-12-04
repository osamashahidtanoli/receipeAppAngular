import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ReceipeService } from '../receipe.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-receipe-edit',
  templateUrl: './receipe-edit.component.html',
  styleUrl: './receipe-edit.component.css'
})
export class ReceipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  receipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private receipeService: ReceipeService, private router: Router) {

  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = Number(params['id']);
          this.editMode = params['id'] != null;
          this.initForm();
        }
      )
  }

  onSubmit() {
    if (this.editMode) {
      this.receipeService.updateReceipe(this.id, this.receipeForm.value)
    } else {
      this.receipeService.addReceipe(this.receipeForm.value)
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route })
  }

  get controls() { // a getter!
    return (<FormArray>this.receipeForm.get('ingredients')).controls;
  }

  onAddIngredient() {
    (<FormArray>this.receipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, Validators.required),
      })
    );
  }

  private initForm() {
    const receipe = this.receipeService.getASingleReceipe(this.id);
    let receipeName = '';
    let receipeImagePath = '';
    let receipeDescription = '';
    let receipeIngredients = new FormArray([]);

    if (this.editMode) {
      receipeName = receipe.name;
      receipeImagePath = receipe.imagePath;
      receipeDescription = receipe.description
      if (receipe['ingredients']) {
        for (let receipeIngredient of receipe.ingredients) {
          receipeIngredients.push(
            new FormGroup({
              'name': new FormControl(receipeIngredient.name, Validators.required),
              'amount': new FormControl(receipeIngredient.amount, Validators.required)
            })
          )
        }
      }
    }

    console.log(receipe)

    this.receipeForm = new FormGroup({
      'name': new FormControl(receipeName, Validators.required),
      'imagePath': new FormControl(receipeImagePath, Validators.required),
      'description': new FormControl(receipeDescription, Validators.required),
      'ingredients': receipeIngredients
    });
  }
}
