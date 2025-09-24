const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.scrollto,
		C3.Behaviors.Platform,
		C3.Plugins.Text,
		C3.Plugins.Keyboard,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Behaviors.Platform.Acts.SetEnabled
	];
};
self.C3_JsPropNameTable = [
	{Sólido: 0},
	{Lago: 0},
	{CentrarEm: 0},
	{Plataforma: 0},
	{Boto: 0},
	{Lago2: 0},
	{fundo: 0},
	{Entradavilarejo: 0},
	{ObstaculoFogo: 0},
	{Saci: 0},
	{pedras: 0},
	{Vilarejo: 0},
	{MICHAEL: 0},
	{Vilarejo2: 0},
	{fundo2: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{Texto: 0},
	{Teclado: 0}
];

self.InstanceType = {
	Lago: class extends self.ISpriteInstance {},
	Boto: class extends self.ISpriteInstance {},
	Lago2: class extends self.ISpriteInstance {},
	fundo: class extends self.ISpriteInstance {},
	Entradavilarejo: class extends self.ISpriteInstance {},
	ObstaculoFogo: class extends self.ISpriteInstance {},
	Saci: class extends self.ISpriteInstance {},
	pedras: class extends self.ISpriteInstance {},
	Vilarejo: class extends self.ISpriteInstance {},
	MICHAEL: class extends self.ISpriteInstance {},
	Vilarejo2: class extends self.ISpriteInstance {},
	fundo2: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	Teclado: class extends self.IInstance {}
}