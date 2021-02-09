import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { NavController } from "@ionic/angular";
import { AlertService } from "src/app/services/alert.service";
import { AuthService } from "src/app/services/auth.service";

interface loginDTO {
  email: string;
  password: string;
}

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fromBuilder: FormBuilder,
    private navCtrl: NavController,
    private alertService: AlertService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = this.fromBuilder.group({
      email: new FormControl("nonthasak.l@gmail.com", [Validators.required]),
      password: new FormControl("dikdcfd06J", [Validators.required]),
    });
  }

  async onLogin(form: FormGroup) {
    if (form.invalid) {
      await this.alertService.BasicToastShow(
        "invalid input, please check your input",
        2000
      );
      return;
    }
    const loginData: loginDTO = {
      email: form.get("email").value,
      password: form.get("password").value,
    };
    await this.authService.signIn(loginData.email, loginData.password);
    this.loginForm.reset();
    const currentUser = this.authService.getAuthenticatedUser();
    if (currentUser) {
      this.navCtrl.navigateForward("/home");
    } else {
      this.alertService.BasicToastShow(
        "invalid username or password, try again",
        2000
      );
    }
  }
}
