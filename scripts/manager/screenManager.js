export class ScreenManager {
	constructor(screen) {
		this.CurrentScreen = screen;
		this.Transition = 1;
		this.ScreenToChangeTo = screen;
	}

	Update() {
		if (this.Transition >= 1) {
			this.CurrentScreen.Update();
			if (this.ScreenToChangeTo) this.CurrentScreen = this.ScreenToChangeTo
		}

		else {
			this.ScreenToChangeTo.Update();
			this.Transition += .01;
		}
	}

	Draw(context) {
		if (this.Transition >= 1) {
			if (this.CurrentScreen.Draw) this.CurrentScreen.Draw(context);
		}

		else {
			if (this.CurrentScreen.Draw) this.CurrentScreen.Draw(context);
			context.globalAlpha = this.Transition;
			if (this.ScreenToChangeTo.Draw) this.ScreenToChangeTo.Draw(context);
		}
	}

	ChangeScreen(screen) {
		this.ScreenToChangeTo = screen;
		this.Transition = 0;
		if (screen.Initialise) screen.Initialise();
	}
}
