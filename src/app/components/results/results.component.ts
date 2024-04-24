import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

@Component({
    selector: 'app-results',
    standalone: true,
    imports: [MatIconModule, MatCardModule],
    templateUrl: './results.component.html',
    styleUrl: './results.component.scss'
})
export class ResultsComponents {

}