class Shape {
	constructor(_height, _width) {
		this.height = _height;
		this.width = _width;
		this.div = $('<div class="shape"></div>');
		this.addEvents();
		this.render();
	}

	addEvents() {
		this.div.dblclick(() => this.destroy());
		this.div.click(() => this.describe());
	}

	render() {
		this.div.css({
			top: `${this.genRandomPos(this.height)}px`,
			left: `${this.genRandomPos(this.width)}px`,
			height: `${this.height}px`,
			width: `${this.width}px`
		});
		$('.canvas').append(this.div);
	}

	describe() {
		$('#shape-height').text(this.height);
		$('#shape-width').text(this.width);
		$('#shape-name').text(this.name);
	}

	destroy() {
		this.div.remove();
		$('.info-panel').text('n/a');
	}

	genRandomPos(offset) {
		return Math.floor(Math.random() * (600 - offset));
	}
}

class Rectangle extends Shape {
	constructor(_height, _width) {
		super(_height, _width);
        this.name = 'rectangle';
        this.area = this.height * this.width;
        this.perimeter = (2 * this.height) + (2 * this.width);
	}

    describe() {
        super.describe();
        $('#shape-area').text(this.area);
        $('#shape-perimeter').text(this.perimeter);
    }
}

class Square extends Shape {
    constructor(side) {
        super(side, side);
        this.div.css('background-color', 'yellow')
        this.name = 'square';
        this.area = this.height * this.width;
        this.perimeter = (2 * this.height) + (2 * this.width);
    }

    describe() {
        super.describe();
        $('#shape-area').text(this.area);
        $('#shape-perimeter').text(this.perimeter);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(radius * 2, radius * 2);
        this.radius = radius;
        this.name = 'circle';
        this.div.css('border-radius', '50%');
        this.area = Math.PI * Math.pow(this.radius, 2);
        this.perimeter = 2 * Math.PI * this.radius;
    }

    describe() {
        super.describe();
        $('#shape-area').text(this.area);
        $('#shape-perimeter').text(this.perimeter);
    }
}

class Triangle extends Shape {
    constructor(side) {
        super(side, side);
        this.name = 'triangle';
        this.div.css({
            height: '0px',
            width: '0px',
            borderTop: `${this.width}px solid #0091ea`,
            borderRight: `${this.width}px solid transparent`,
        });
        this.area = Math.PI * Math.pow(this.radius, 2);
        this.perimeter = 2 * Math.PI * this.radius;
    }

    describe() {
        super.describe();
        $('#shape-area').text(this.area);
        $('#shape-perimeter').text(this.perimeter);
    }
}