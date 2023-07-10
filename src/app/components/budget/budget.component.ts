import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { IPlcModules } from 'src/app/models/modules';
import { PlcModulesService } from 'src/app/services/plc-modules.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit{
    modules: IPlcModules[];
    modulesSubscription: Subscription;

    constructor(private PlcModulesService: PlcModulesService ){}
    
    ngOnInit(): void {
        this.modulesSubscription = this.PlcModulesService.getPlcModules().subscribe((data) => {
            this.modules = data;
        })
    }

    ngOnDestroy(){
        if (this.modulesSubscription) this.modulesSubscription.unsubscribe();
    }

    
}
