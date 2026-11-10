// ../../../node_modules/@lit/reactive-element/css-tag.js
var e = globalThis, t = e.ShadowRoot && (e.ShadyCSS === void 0 || e.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, n = Symbol(), r = /* @__PURE__ */ new WeakMap(), i = class {
	constructor(e, t, r) {
		if (this._$cssResult$ = !0, r !== n) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = e, this.t = t;
	}
	get styleSheet() {
		let e = this.o, n = this.t;
		if (t && e === void 0) {
			let t = n !== void 0 && n.length === 1;
			t && (e = r.get(n)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), t && r.set(n, e));
		}
		return e;
	}
	toString() {
		return this.cssText;
	}
}, a = (e) => new i(typeof e == "string" ? e : e + "", void 0, n), o = (e, ...t) => new i(e.length === 1 ? e[0] : t.reduce((t, n, r) => t + ((e) => {
	if (!0 === e._$cssResult$) return e.cssText;
	if (typeof e == "number") return e;
	throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
})(n) + e[r + 1], e[0]), e, n), s = (n, r) => {
	if (t) n.adoptedStyleSheets = r.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
	else for (let t of r) {
		let r = document.createElement("style"), i = e.litNonce;
		i !== void 0 && r.setAttribute("nonce", i), r.textContent = t.cssText, n.appendChild(r);
	}
}, c = t ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
	let t = "";
	for (let n of e.cssRules) t += n.cssText;
	return a(t);
})(e) : e, { is: l, defineProperty: u, getOwnPropertyDescriptor: ee, getOwnPropertyNames: te, getOwnPropertySymbols: ne, getPrototypeOf: re } = Object, ie = globalThis, ae = ie.trustedTypes, oe = ae ? ae.emptyScript : "", se = ie.reactiveElementPolyfillSupport, d = (e, t) => e, f = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? oe : null;
				break;
			case Object:
			case Array: e = e == null ? e : JSON.stringify(e);
		}
		return e;
	},
	fromAttribute(e, t) {
		let n = e;
		switch (t) {
			case Boolean:
				n = e !== null;
				break;
			case Number:
				n = e === null ? null : Number(e);
				break;
			case Object:
			case Array: try {
				n = JSON.parse(e);
			} catch {
				n = null;
			}
		}
		return n;
	}
}, ce = (e, t) => !l(e, t), le = {
	attribute: !0,
	type: String,
	converter: f,
	reflect: !1,
	useDefault: !1,
	hasChanged: ce
};
Symbol.metadata ??= Symbol("metadata"), ie.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var p = class extends HTMLElement {
	static addInitializer(e) {
		this._$Ei(), (this.l ??= []).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = le) {
		if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
			let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
			r !== void 0 && u(this.prototype, e, r);
		}
	}
	static getPropertyDescriptor(e, t, n) {
		let { get: r, set: i } = ee(this.prototype, e) ?? {
			get() {
				return this[t];
			},
			set(e) {
				this[t] = e;
			}
		};
		return {
			get: r,
			set(t) {
				let a = r?.call(this);
				i?.call(this, t), this.requestUpdate(e, a, n);
			},
			configurable: !0,
			enumerable: !0
		};
	}
	static getPropertyOptions(e) {
		return this.elementProperties.get(e) ?? le;
	}
	static _$Ei() {
		if (this.hasOwnProperty(d("elementProperties"))) return;
		let e = re(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(d("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(d("properties"))) {
			let e = this.properties, t = [...te(e), ...ne(e)];
			for (let n of t) this.createProperty(n, e[n]);
		}
		let e = this[Symbol.metadata];
		if (e !== null) {
			let t = litPropertyMetadata.get(e);
			if (t !== void 0) for (let [e, n] of t) this.elementProperties.set(e, n);
		}
		this._$Eh = /* @__PURE__ */ new Map();
		for (let [e, t] of this.elementProperties) {
			let n = this._$Eu(e, t);
			n !== void 0 && this._$Eh.set(n, e);
		}
		this.elementStyles = this.finalizeStyles(this.styles);
	}
	static finalizeStyles(e) {
		let t = [];
		if (Array.isArray(e)) {
			let n = new Set(e.flat(1 / 0).reverse());
			for (let e of n) t.unshift(c(e));
		} else e !== void 0 && t.push(c(e));
		return t;
	}
	static _$Eu(e, t) {
		let n = t.attribute;
		return !1 === n ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
	}
	constructor() {
		super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
	}
	_$Ev() {
		this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e) => e(this));
	}
	addController(e) {
		(this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
	}
	removeController(e) {
		this._$EO?.delete(e);
	}
	_$E_() {
		let e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
		for (let n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
		e.size > 0 && (this._$Ep = e);
	}
	createRenderRoot() {
		let e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
		return s(e, this.constructor.elementStyles), e;
	}
	connectedCallback() {
		this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((e) => e.hostConnected?.());
	}
	enableUpdating(e) {}
	disconnectedCallback() {
		this._$EO?.forEach((e) => e.hostDisconnected?.());
	}
	attributeChangedCallback(e, t, n) {
		this._$AK(e, n);
	}
	_$ET(e, t) {
		let n = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, n);
		if (r !== void 0 && !0 === n.reflect) {
			let i = (n.converter?.toAttribute === void 0 ? f : n.converter).toAttribute(t, n.type);
			this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? f : e.converter;
			this._$Em = r;
			let a = i.fromAttribute(t, e.type);
			this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
		}
	}
	requestUpdate(e, t, n, r = !1, i) {
		if (e !== void 0) {
			let a = this.constructor;
			if (!1 === r && (i = this[e]), n ??= a.getPropertyOptions(e), !((n.hasChanged ?? ce)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(a._$Eu(e, n)))) return;
			this.C(e, t, n);
		}
		!1 === this.isUpdatePending && (this._$ES = this._$EP());
	}
	C(e, t, { useDefault: n, reflect: r, wrapped: i }, a) {
		n && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), !0 !== i || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), !0 === r && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
	}
	async _$EP() {
		this.isUpdatePending = !0;
		try {
			await this._$ES;
		} catch (e) {
			Promise.reject(e);
		}
		let e = this.scheduleUpdate();
		return e != null && await e, !this.isUpdatePending;
	}
	scheduleUpdate() {
		return this.performUpdate();
	}
	performUpdate() {
		if (!this.isUpdatePending) return;
		if (!this.hasUpdated) {
			if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
				for (let [e, t] of this._$Ep) this[e] = t;
				this._$Ep = void 0;
			}
			let e = this.constructor.elementProperties;
			if (e.size > 0) for (let [t, n] of e) {
				let { wrapped: e } = n, r = this[t];
				!0 !== e || this._$AL.has(t) || r === void 0 || this.C(t, void 0, n, r);
			}
		}
		let e = !1, t = this._$AL;
		try {
			e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach((e) => e.hostUpdate?.()), this.update(t)) : this._$EM();
		} catch (t) {
			throw e = !1, this._$EM(), t;
		}
		e && this._$AE(t);
	}
	willUpdate(e) {}
	_$AE(e) {
		this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
	}
	_$EM() {
		this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
	}
	get updateComplete() {
		return this.getUpdateComplete();
	}
	getUpdateComplete() {
		return this._$ES;
	}
	shouldUpdate(e) {
		return !0;
	}
	update(e) {
		this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e])), this._$EM();
	}
	updated(e) {}
	firstUpdated(e) {}
};
p.elementStyles = [], p.shadowRootOptions = { mode: "open" }, p[d("elementProperties")] = /* @__PURE__ */ new Map(), p[d("finalized")] = /* @__PURE__ */ new Map(), se?.({ ReactiveElement: p }), (ie.reactiveElementVersions ??= []).push("2.1.2");
// ../../../node_modules/lit-html/lit-html.js
var ue = globalThis, de = (e) => e, fe = ue.trustedTypes, pe = fe ? fe.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, me = "$lit$", m = `lit$${Math.random().toFixed(9).slice(2)}$`, he = "?" + m, ge = `<${he}>`, h = document, g = () => h.createComment(""), _ = (e) => e === null || typeof e != "object" && typeof e != "function", _e = Array.isArray, ve = (e) => _e(e) || typeof e?.[Symbol.iterator] == "function", ye = "[ 	\n\f\r]", v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, be = /-->/g, xe = />/g, y = RegExp(`>|${ye}(?:([^\\s"'>=/]+)(${ye}*=${ye}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), Se = /'/g, Ce = /"/g, we = /^(?:script|style|textarea|title)$/i, b = ((e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}))(1), x = Symbol.for("lit-noChange"), S = Symbol.for("lit-nothing"), Te = /* @__PURE__ */ new WeakMap(), C = h.createTreeWalker(h, 129);
function Ee(e, t) {
	if (!_e(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return pe === void 0 ? t : pe.createHTML(t);
}
var De = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = v;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === v ? c[1] === "!--" ? o = be : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = y) : (we.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = y) : o = xe : o === y ? c[0] === ">" ? (o = i ?? v, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? y : c[3] === "\"" ? Ce : Se) : o === Ce || o === Se ? o = y : o === be || o === xe ? o = v : (o = y, i = void 0);
		let ee = o === y && e[t + 1].startsWith("/>") ? " " : "";
		a += o === v ? n + ge : l >= 0 ? (r.push(s), n.slice(0, l) + me + n.slice(l) + m + ee) : n + m + (l === -2 ? t : ee);
	}
	return [Ee(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, Oe = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = De(t, n);
		if (this.el = e.createElement(l, r), C.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = C.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(me)) {
					let t = u[o++], n = i.getAttribute(e).split(m), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? Me : r[1] === "?" ? Ne : r[1] === "@" ? Pe : je
					}), i.removeAttribute(e);
				} else e.startsWith(m) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (we.test(i.tagName)) {
					let e = i.textContent.split(m), t = e.length - 1;
					if (t > 0) {
						i.textContent = fe ? fe.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], g()), C.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], g());
					}
				}
			} else if (i.nodeType === 8) {
				if (i.data === he) c.push({
					type: 2,
					index: a
				});
				else {
					let e = -1;
					for (; (e = i.data.indexOf(m, e + 1)) !== -1;) c.push({
						type: 7,
						index: a
					}), e += m.length - 1;
				}
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = h.createElement("template");
		return n.innerHTML = e, n;
	}
};
function w(e, t, n = e, r) {
	if (t === x) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = _(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = w(e, i._$AS(e, t.values), i, r)), t;
}
var ke = class {
	constructor(e, t) {
		this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
	}
	get parentNode() {
		return this._$AM.parentNode;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	u(e) {
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? h).importNode(t, !0);
		C.currentNode = r;
		let i = C.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new Ae(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new Fe(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = C.nextNode(), a++);
		}
		return C.currentNode = h, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, Ae = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = S, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
	}
	get parentNode() {
		let e = this._$AA.parentNode, t = this._$AM;
		return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
	}
	get startNode() {
		return this._$AA;
	}
	get endNode() {
		return this._$AB;
	}
	_$AI(e, t = this) {
		e = w(this, e, t), _(e) ? e === S || e == null || e === "" ? (this._$AH !== S && this._$AR(), this._$AH = S) : e !== this._$AH && e !== x && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? ve(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== S && _(this._$AH) ? this._$AA.nextSibling.data = e : this.T(h.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = Oe.createElement(Ee(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new ke(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = Te.get(e.strings);
		return t === void 0 && Te.set(e.strings, t = new Oe(e)), t;
	}
	k(t) {
		_e(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(g()), this.O(g()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, t) {
		for (this._$AP?.(!1, !0, t); e !== this._$AB;) {
			let t = de(e).nextSibling;
			de(e).remove(), e = t;
		}
	}
	setConnected(e) {
		this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
	}
}, je = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = S, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = S;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = w(this, e, t, 0), a = !_(e) || e !== this._$AH && e !== x, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = w(this, r[n + o], t, o), s === x && (s = this._$AH[o]), a ||= !_(s) || s !== this._$AH[o], s === S ? e = S : e !== S && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === S ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, Me = class extends je {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === S ? void 0 : e;
	}
}, Ne = class extends je {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== S);
	}
}, Pe = class extends je {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = w(this, e, t, 0) ?? S) === x) return;
		let n = this._$AH, r = e === S && n !== S || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== S && (n === S || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, Fe = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		w(this, e);
	}
}, Ie = ue.litHtmlPolyfillSupport;
Ie?.(Oe, Ae), (ue.litHtmlVersions ??= []).push("3.3.3");
var Le = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new Ae(t.insertBefore(g(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, Re = globalThis, T = class extends p {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Le(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return x;
	}
};
T._$litElement$ = !0, T.finalized = !0, Re.litElementHydrateSupport?.({ LitElement: T });
var ze = Re.litElementPolyfillSupport;
ze?.({ LitElement: T }), (Re.litElementVersions ??= []).push("4.2.2");
// ../../../node_modules/@lit/reactive-element/decorators/custom-element.js
var E = (e) => (t, n) => {
	n === void 0 ? customElements.define(e, t) : n.addInitializer(() => {
		customElements.define(e, t);
	});
}, Be = {
	attribute: !0,
	type: String,
	converter: f,
	reflect: !1,
	hasChanged: ce
}, Ve = (e = Be, t, n) => {
	let { kind: r, metadata: i } = n, a = globalThis.litPropertyMetadata.get(i);
	if (a === void 0 && globalThis.litPropertyMetadata.set(i, a = /* @__PURE__ */ new Map()), r === "setter" && ((e = Object.create(e)).wrapped = !0), a.set(n.name, e), r === "accessor") {
		let { name: r } = n;
		return {
			set(n) {
				let i = t.get.call(this);
				t.set.call(this, n), this.requestUpdate(r, i, e, !0, n);
			},
			init(t) {
				return t !== void 0 && this.C(r, void 0, e, t), t;
			}
		};
	}
	if (r === "setter") {
		let { name: r } = n;
		return function(n) {
			let i = this[r];
			t.call(this, n), this.requestUpdate(r, i, e, !0, n);
		};
	}
	throw Error("Unsupported decorator location: " + r);
};
function He(e) {
	return (t, n) => typeof n == "object" ? Ve(e, t, n) : ((e, t, n) => {
		let r = t.hasOwnProperty(n);
		return t.constructor.createProperty(n, e), r ? Object.getOwnPropertyDescriptor(t, n) : void 0;
	})(e, t, n);
}
// ../../../node_modules/@lit/reactive-element/decorators/state.js
function Ue(e) {
	return He({
		...e,
		state: !0,
		attribute: !1
	});
}
// src/cards.ts
var We = /* @__PURE__ */ new Set(["select-options", "toggle"]), D = (e, t, n) => {
	let r = {
		type: "tile",
		entity: e,
		name: n ?? [{ type: "entity" }]
	};
	return t && (r.features = t), t?.some(({ type: e }) => We.has(e)) && (r.state_content = "last_updated"), r;
}, Ge = (e) => {
	switch (e) {
		case "bar": return [{ type: "bar-gauge" }];
		case "trend": return [{ type: "trend-graph" }];
		case "none": return;
	}
}, O = (e, t, n) => {
	let r = {
		type: "heading",
		heading: e
	};
	return t && (r.icon = t), n && (r.tap_action = {
		action: "navigate",
		navigation_path: n
	}), r;
}, Ke = (e, t, n) => {
	let r = {
		type: "history-graph",
		hours_to_show: t,
		entities: e
	};
	return n && (r.title = n), r;
}, qe = (e, t, n) => {
	let r = e.single.get("version");
	return !e.webClientUrl || !r ? [] : [{
		type: "entity",
		entity: r,
		name: `${n} | System Bridge`,
		icon: "mdi:open-in-new",
		show_name: !0,
		show_state: !1,
		tap_action: {
			action: "url",
			url_path: `${e.webClientUrl}/${t === "overview" ? "" : t}`
		}
	}];
}, Je = [
	["update", "Update"],
	["version", "Version"],
	["os", "OS"],
	["kernel", "Kernel"],
	["boot_time", "Booted"],
	["pending_reboot", "Pending reboot"],
	["displays_connected", "Displays"]
], Ye = (e) => Je.flatMap(([t, n]) => {
	let r = e.single.get(t);
	return r ? [{
		type: "entity",
		entity: r,
		name: n,
		show_name: !0,
		show_state: !0
	}] : [];
}), Xe = "2026.10", Ze = "command_", Qe = /* @__PURE__ */ new Map([
	["disk_device_read_rate", "2026.11"],
	["disk_device_write_rate", "2026.11"],
	["disk_read_rate", "2026.11"],
	["disk_write_rate", "2026.11"],
	["load_average", "2026.11"],
	["load_average_5", "2026.11"],
	["load_average_15", "2026.11"],
	["network_download_rate", "2026.11"],
	["network_upload_rate", "2026.11"],
	["network_interface_download_rate", "2026.11"],
	["network_interface_upload_rate", "2026.11"],
	["network_interface_ssid", "2026.11"],
	["network_interface_signal_strength", "2026.11"],
	["network_interface_link_rate", "2026.11"],
	["ac_connected", "2026.11"],
	["battery_info", "2026.11"],
	["battery_info_state", "2026.11"],
	["battery_power", "2026.11"],
	["battery_state", "2026.11"],
	["battery_voltage", "2026.11"],
	["display_brightness", "2026.12"],
	["display_power", "2026.12"],
	["gpu_decoder_usage_percentage", "2026.12"],
	["gpu_encoder_usage_percentage", "2026.12"],
	["gpu_fan_speed_percentage", "2026.12"],
	["gpu_memory_total", "2026.12"],
	["gpu_performance_state", "2026.12"],
	["gpu_power_limit", "2026.12"],
	["swap_used", "2026.12"],
	["swap_used_percentage", "2026.12"],
	["idle_time", "2026.12"],
	["locked", "2026.12"],
	["power_hibernate", "2026.12"],
	["power_lock", "2026.12"],
	["power_logout", "2026.12"],
	["power_restart", "2026.12"],
	["power_shutdown", "2026.12"],
	["power_sleep", "2026.12"],
	["audio", "2026.12"],
	["audio_input", "2026.12"],
	["audio_input_mute", "2026.12"],
	["audio_input_volume", "2026.12"],
	["audio_output", "2026.12"],
	["keep_awake", "2026.12"],
	["power_profile", "2026.12"],
	["notification", "2026.12"],
	[Ze, "2026.12"]
]), $e = (e, t) => Qe.get(e ?? (t.startsWith("command_") ? "command_" : t)), k = (e) => {
	let [t = 0, n = 0] = e.split(".").map((e) => Number.parseInt(e, 10));
	return t * 100 + n;
}, et = (e, t) => k(e) >= k(t), tt = (e) => e.reduce((e, t) => e === void 0 || t === void 0 ? void 0 : k(t) < k(e) ? t : e, e[0]), A = (e, ...t) => [e, tt(t.map((e) => Qe.get(e)))], nt = new Map([
	A("audio", "audio"),
	A("audio-outputs", "audio", "audio_output"),
	A("audio-inputs", "audio_input", "audio_input_mute", "audio_input_volume"),
	A("device-batteries", "battery_info", "battery_info_state"),
	A("disk-activity", "disk_read_rate", "disk_write_rate", "disk_device_read_rate", "disk_device_write_rate"),
	A("network", "network_download_rate", "network_upload_rate"),
	A("network-activity", "network_download_rate", "network_upload_rate"),
	A("interface", "network_interface_download_rate", "network_interface_upload_rate", "network_interface_ssid", "network_interface_signal_strength", "network_interface_link_rate"),
	A("desktop", "locked", "idle_time"),
	A("power-commands", "power_lock", "power_logout", "power_sleep", "power_hibernate", "power_restart", "power_shutdown"),
	A("saved-commands", Ze),
	A("notifications", "notification"),
	A("power", "power_profile", "keep_awake")
]), rt = (e, ...t) => [e, tt(t.map((e) => nt.get(e)))], it = new Map([
	rt("audio", "audio-outputs", "audio-inputs"),
	rt("desktop", "desktop"),
	rt("networks", "network-activity", "interface")
]), j = (e, t) => ({
	cards: e,
	columnSpan: t
}), at = (e, t) => {
	let n = e.filter((e) => e !== void 0);
	if (n.every((e) => e.type === "heading")) return;
	let r = {
		type: "grid",
		cards: n
	};
	if (t && (r.column_span = t), t && t > 1) {
		let e = n.filter((e) => e.type === "history-graph"), t = n.filter((e) => e.type !== "history-graph"), i = t.every((e) => e.type === "heading"), a = Array.from({ length: Math.ceil(e.length / 2) }, (t, n) => e.slice(n * 2, n * 2 + 2));
		r.cards = [...t, ...a.flatMap((e) => {
			let [t, n] = e;
			return t ? n ? i ? e : [{
				type: "grid",
				columns: 2,
				square: !1,
				cards: e,
				grid_options: { columns: "full" }
			}] : [{
				...t,
				grid_options: { columns: "full" }
			}] : [];
		})];
	}
	return r;
}, ot = (e) => {
	let t = Math.max(0, ...e.map(({ columnSpan: e }) => e ?? 0)) || void 0, n = e.flatMap(({ cards: e }) => at(e, t)?.cards ?? []);
	if (n.length === 0) return;
	let r = {
		type: "grid",
		cards: n
	};
	return t && (r.column_span = t), r;
}, M = ({ single: e }, ...t) => t.flatMap((t) => e.get(t) ?? []), N = (e, ...t) => t.flatMap((t) => e?.fields.get(t) ?? []), P = ({ items: e }, t, n) => [...e[t].values()].flatMap((e) => N(e, n)), F = (e, t, n) => e.length > 0 ? Ke(e, t, n) : void 0, st = (e) => e ? D(e) : void 0, ct = (e, t) => e ? D(e, t) : void 0, lt = {
	source: { type: "media-player-source" },
	playback: {
		type: "media-player-playback",
		controls: [
			"shuffle",
			"media_previous_track",
			"media_play_pause",
			"media_stop",
			"media_next_track",
			"repeat"
		]
	},
	volume_buttons: { type: "media-player-volume-buttons" },
	volume_slider: { type: "media-player-volume-slider" }
}, ut = (e) => e.map((e) => lt[e]), dt = (e, t) => ({
	...D(e, ut(t)),
	features_position: "inline"
}), I = (e, t, n, r) => n.flatMap((n) => {
	let i = e?.fields.get(n);
	if (!i) return [];
	let a = e?.labels.get(n), o = a?.startsWith(t) ? a.slice(t.length).trim() : "";
	return [D(i, r, o ? `${o.charAt(0).toUpperCase()}${o.slice(1)}` : void 0)];
}), ft = {
	storage: ({ entities: e, link: t }) => j([O("Storage", "mdi:harddisk", t), ...P(e, "mount", "space_used").map((e) => D(e))]),
	audio: ({ entities: e, audioFeatures: t, link: n }) => j([O("Audio", "mdi:volume-high", n), ...M(e, "audio").map((e) => dt(e, t))]),
	"now-playing": ({ entities: e, mediaFeatures: t, link: n }) => j([O("Now playing", "mdi:play-circle-outline", n), ...M(e, "media").map((e) => dt(e, t))]),
	"audio-outputs": ({ entities: e, audioFeatures: t }) => j([
		O("Outputs", "mdi:speaker"),
		...M(e, "audio").map((e) => dt(e, t)),
		...P(e, "audio_output", "audio_output").map((e) => D(e, ut(t.filter((e) => e !== "source"))))
	]),
	"audio-inputs": ({ entities: e, inputSource: t }) => j([
		O("Inputs", "mdi:microphone"),
		...M(e, "audio_input").map((e) => D(e, t ? [{ type: "select-options" }] : [])),
		...[...e.items.audio_input.values()].flatMap((e) => [...N(e, "volume").map((e) => D(e, [{
			type: "numeric-input",
			style: "slider"
		}])), ...N(e, "mute").map((e) => D(e))])
	]),
	"overview-load": ({ entities: e, hours: t, link: n }) => j([O("CPU and memory", "mdi:cpu-64-bit", n), F(M(e, "processes_load", "memory_used_percentage"), t)]),
	"overview-power": ({ entities: e, hours: t, link: n }) => {
		let r = M(e, "power_usage", "cpu_power_package");
		return j([
			O("Power", "mdi:flash", n),
			...r.map((e) => D(e)),
			F(r, t)
		]);
	},
	"overview-temperatures": ({ entities: e, hours: t, link: n }) => {
		let r = [...M(e, "cpu_temperature"), ...P(e, "gpu", "temperature")];
		return j([
			O("Temperatures", "mdi:thermometer", n),
			...r.map((e) => D(e)),
			F(r, t)
		]);
	},
	battery: ({ entities: e, percentage: t }) => j([
		O("Battery", "mdi:battery"),
		ct(e.single.get("battery"), t),
		...M(e, "battery_state", "battery_time_remaining", "battery_is_charging", "ac_connected", "battery_power", "battery_voltage").map((e) => D(e))
	]),
	"device-batteries": ({ entities: e, percentage: t }) => j([O("Devices", "mdi:battery-bluetooth"), ...[...e.items.battery.values()].flatMap((e) => [...N(e, "battery_info").map((e) => D(e, t)), ...N(e, "state").map((e) => D(e))])]),
	cpu: ({ entities: e, percentage: t }) => j([
		O("Usage", "mdi:cpu-64-bit"),
		ct(e.single.get("processes_load"), t),
		...M(e, "cpu_speed", "cpu_power_package", "load_average", "cpu_temperature", "cpu_voltage").map((e) => D(e))
	]),
	"cpu-history": ({ entities: e, hours: t }) => j([
		O("Usage over time"),
		F(M(e, "processes_load"), t, "Usage"),
		F(M(e, "cpu_speed"), t, "Frequency"),
		F(M(e, "cpu_power_package"), t, "Power"),
		F(M(e, "load_average", "load_average_5", "load_average_15"), t, "Load average"),
		F(M(e, "cpu_temperature"), t, "Temperature")
	], 2),
	"cpu-cores": ({ entities: e }) => j([
		O("Cores"),
		...P(e, "core", "processes_load_cpu").map((e) => D(e)),
		...P(e, "core", "cpu_power_core").map((e) => D(e))
	]),
	memory: ({ entities: e, percentage: t }) => j([
		O("In use", "mdi:memory"),
		ct(e.single.get("memory_used_percentage"), t),
		...M(e, "memory_free", "memory_used").map((e) => D(e)),
		ct(e.single.get("swap_used_percentage"), t),
		st(e.single.get("swap_used"))
	]),
	"memory-history": ({ entities: e, hours: t }) => j([O("Usage over time"), F(M(e, "memory_used_percentage", "swap_used_percentage"), t)], 2),
	mount: ({ entities: e, item: t, percentage: n }) => {
		let r = t === void 0 ? void 0 : e.items.mount.get(t), i = r?.name ?? "";
		return j([O(i, "mdi:harddisk"), ...I(r, i, ["space_used"], n)]);
	},
	"disk-activity": ({ entities: e, hours: t }) => {
		let n = M(e, "disk_read_rate", "disk_write_rate");
		return j([
			O("Activity", "mdi:swap-vertical"),
			...n.map((e) => D(e)),
			F(n, t),
			F([...e.items.disk.values()].flatMap((e) => N(e, "read_rate", "write_rate")), t, "Per disk")
		], 2);
	},
	display: ({ entities: e, item: t }) => {
		let n = t === void 0 ? void 0 : e.items.display.get(t), r = `Display ${n?.name ?? ""}`;
		return j([
			O(r, "mdi:monitor"),
			...I(n, r, ["power"], [{ type: "toggle" }]),
			...I(n, r, ["brightness"], [{
				type: "numeric-input",
				style: "slider"
			}]),
			...I(n, r, [
				"resolution_x",
				"resolution_y",
				"refresh_rate"
			])
		]);
	},
	gpu: ({ entities: e, item: t, hours: n, percentage: r }) => {
		let i = t === void 0 ? void 0 : e.items.gpu.get(t), a = i?.name ?? "";
		return j([
			O(a, "mdi:expansion-card-variant"),
			...I(i, a, [
				"usage_percentage",
				"memory_used_percentage",
				"encoder_usage_percentage",
				"decoder_usage_percentage"
			], r),
			...I(i, a, [
				"memory_used",
				"memory_free",
				"memory_total",
				"power_usage",
				"power_limit",
				"temperature",
				"core_clock_speed",
				"memory_clock_speed",
				"fan_speed",
				"fan_speed_percentage",
				"performance_state"
			]),
			F(N(i, "usage_percentage", "encoder_usage_percentage", "decoder_usage_percentage"), n, "Load"),
			F(N(i, "memory_used_percentage"), n, "Memory"),
			F(N(i, "power_usage"), n, "Power"),
			F(N(i, "temperature"), n, "Temperature")
		], 2);
	},
	network: ({ entities: e, hours: t, link: n }) => {
		let r = M(e, "network_download_rate", "network_upload_rate");
		return j([
			O("Network", "mdi:lan", n),
			...r.map((e) => D(e)),
			F(r, t)
		]);
	},
	"network-activity": ({ entities: e, hours: t }) => {
		let n = M(e, "network_download_rate"), r = M(e, "network_upload_rate");
		return j([
			O("Network", "mdi:lan"),
			...[...n, ...r].map((e) => D(e)),
			F(n, t, "Download"),
			F(r, t, "Upload")
		], 2);
	},
	interface: ({ entities: e, item: t, hours: n }) => {
		let r = t === void 0 ? void 0 : e.items.interface.get(t), i = r?.name ?? "";
		return j([
			O(i, "mdi:ethernet"),
			...I(r, i, [
				"download_rate",
				"upload_rate",
				"ssid",
				"signal_strength",
				"link_rate"
			]),
			F(N(r, "download_rate"), n, "Download"),
			F(N(r, "upload_rate"), n, "Upload")
		], 2);
	},
	desktop: ({ entities: e, hours: t }) => j([
		O("Session", "mdi:account-clock-outline"),
		...M(e, "locked", "idle_time").map((e) => D(e)),
		F(M(e, "idle_time"), t)
	], 2),
	processes: ({ entities: e, hours: t }) => j([
		O("Processes", "mdi:application-cog-outline"),
		st(e.single.get("processes_count")),
		F(M(e, "processes_count"), t)
	], 2),
	"power-commands": ({ entities: e }) => j([O("Commands", "mdi:power"), ...M(e, "power_lock", "power_logout", "power_sleep", "power_hibernate", "power_restart", "power_shutdown").map((e) => D(e))]),
	"saved-commands": ({ entities: e }) => j([O("Saved commands", "mdi:console"), ...[...e.single].flatMap(([e, t]) => e.startsWith("command_") ? [D(t)] : [])]),
	notifications: ({ entities: e }) => j([
		O("Notifications", "mdi:bell-outline"),
		st(e.single.get("notify")),
		...M(e, "notification").map((e) => ({
			...D(e),
			state_content: ["event_type", "last_changed"]
		}))
	]),
	power: ({ entities: e }) => j([
		O("Power", "mdi:lightning-bolt"),
		...M(e, "power_profile").map((e) => D(e, [{ type: "select-options" }])),
		...M(e, "keep_awake").map((e) => D(e, [{ type: "toggle" }]))
	]),
	system: ({ entities: e }) => j([O("Device", "mdi:information-outline"), ...M(e, "power_usage", "camera_in_use").map((e) => D(e))])
}, L = (e) => Object.hasOwn(ft, e), R = (e, t, n) => [...e.items[t].keys()].map((e) => ({
	sections: [n],
	item: e
})), z = (e) => () => e.map((e) => ({ sections: [e] })), B = [
	{
		page: "overview",
		title: "Overview",
		description: "A summary of storage, audio, media, load, network and power",
		icon: "mdi:view-dashboard-outline",
		diagnostics: !0,
		sections: [
			"storage",
			"audio",
			"now-playing",
			"overview-load",
			"network",
			"overview-power",
			"overview-temperatures"
		],
		layout: () => [
			{
				sections: ["storage"],
				link: "disks"
			},
			{
				sections: ["audio"],
				link: "audio"
			},
			{
				sections: ["now-playing"],
				link: "media"
			},
			{
				sections: ["overview-load"],
				link: "cpu"
			},
			{
				sections: ["network"],
				link: "networks"
			},
			{
				sections: ["overview-power"],
				link: "system"
			},
			{
				sections: ["overview-temperatures"],
				link: "cpu"
			}
		]
	},
	{
		page: "audio",
		title: "Audio",
		description: "Output and input devices and their volume",
		icon: "mdi:volume-high",
		sections: ["audio-outputs", "audio-inputs"],
		layout: z(["audio-outputs", "audio-inputs"])
	},
	{
		page: "battery",
		title: "Battery",
		description: "Charge and time remaining, and connected devices' batteries",
		icon: "mdi:battery",
		sections: ["battery", "device-batteries"],
		layout: z(["battery", "device-batteries"])
	},
	{
		page: "cpu",
		title: "CPU",
		description: "Usage, frequency and each core",
		icon: "mdi:cpu-64-bit",
		sections: [
			"cpu",
			"cpu-history",
			"cpu-cores"
		],
		layout: z([
			"cpu",
			"cpu-history",
			"cpu-cores"
		])
	},
	{
		page: "desktop",
		title: "Desktop",
		description: "Whether the session is locked, and how long it's been idle",
		icon: "mdi:application-outline",
		sections: ["desktop"],
		layout: z(["desktop"])
	},
	{
		page: "disks",
		title: "Disks",
		description: "Space on each mount, and disk activity",
		icon: "mdi:harddisk",
		sections: ["mount", "disk-activity"],
		layout: (e) => [...R(e, "mount", "mount"), { sections: ["disk-activity"] }]
	},
	{
		page: "displays",
		title: "Displays",
		description: "Power, brightness, resolution and refresh rate",
		icon: "mdi:monitor",
		sections: ["display"],
		layout: (e) => R(e, "display", "display")
	},
	{
		page: "gpus",
		title: "GPUs",
		description: "Load, memory, clocks and power",
		icon: "mdi:expansion-card-variant",
		sections: ["gpu"],
		layout: (e) => R(e, "gpu", "gpu")
	},
	{
		page: "media",
		title: "Media",
		description: "What's playing and its controls",
		icon: "mdi:play-circle-outline",
		sections: ["now-playing"],
		layout: z(["now-playing"])
	},
	{
		page: "memory",
		title: "Memory",
		description: "Physical memory and swap",
		icon: "mdi:memory",
		sections: ["memory", "memory-history"],
		layout: z(["memory", "memory-history"])
	},
	{
		page: "networks",
		title: "Networks",
		description: "Interfaces and traffic",
		icon: "mdi:lan",
		sections: ["network-activity", "interface"],
		layout: (e) => [{ sections: ["network-activity"] }, ...R(e, "interface", "interface")]
	},
	{
		page: "processes",
		title: "Processes",
		description: "How many processes are running",
		icon: "mdi:application-cog-outline",
		sections: ["processes"],
		layout: z(["processes"])
	},
	{
		page: "system",
		title: "System",
		description: "The device, power, commands and notifications",
		icon: "mdi:information-outline",
		diagnostics: !0,
		sections: [
			"system",
			"power",
			"power-commands",
			"saved-commands",
			"notifications"
		],
		layout: () => [
			{ sections: ["system"] },
			{ sections: ["power"] },
			{ sections: ["power-commands", "saved-commands"] },
			{ sections: ["notifications"] }
		]
	}
], pt = {
	module: "system",
	sections: ["system"]
}, mt = ({ type: e, device_id: t, ...n }) => Object.keys(n).length === 2 && n.module === pt.module && n.sections?.length === 1 && n.sections[0] === pt.sections[0], ht = (e) => B.find((t) => t.page === e), gt = (e) => B.find(({ sections: t }) => t.some((t) => t === e)), _t = (e, t) => {
	let n = ht(e)?.sections;
	return n ? [...t].sort((e, t) => n.indexOf(e) - n.indexOf(t)) : [...t];
}, vt = /* @__PURE__ */ new Map([["commands", ["power-commands", "saved-commands"]]]), yt = (e) => {
	let t = e.sections ?? (e.section === void 0 ? [] : vt.get(e.section) ?? [e.section]);
	return {
		sections: _t(e.module, t.filter(L)),
		unknown: t.filter((e) => !L(e))
	};
}, V = (e) => ht(e.module) ?? gt(yt(e).sections[0] ?? ""), bt = "system_bridge", xt = [
	{
		kind: "mount",
		translationPrefix: "space_used",
		keyPrefix: "filesystem_"
	},
	{
		kind: "disk",
		translationPrefix: "disk_device_",
		keyPrefix: "disk_"
	},
	{
		kind: "interface",
		translationPrefix: "network_interface_",
		keyPrefix: "network_"
	},
	{
		kind: "gpu",
		translationPrefix: "gpu_",
		keyPrefix: "gpu_"
	},
	{
		kind: "display",
		translationPrefix: "display_",
		keyPrefix: "display_"
	},
	{
		kind: "battery",
		translationPrefix: "battery_info_",
		keyPrefix: "battery_"
	},
	{
		kind: "battery",
		translationPrefix: "battery_info",
		keyPrefix: "battery_"
	},
	{
		kind: "core",
		translationPrefix: "processes_load_cpu",
		keyPrefix: "processes_load_cpu_"
	},
	{
		kind: "core",
		translationPrefix: "cpu_power_core",
		keyPrefix: "cpu_power_core_"
	},
	{
		kind: "audio_output",
		translationPrefix: "audio_output",
		keyPrefix: "audio_output_"
	},
	{
		kind: "audio_input",
		translationPrefix: "audio_input_",
		keyPrefix: "audio_input_"
	}
], St = (e) => e.identifiers.find(([e]) => e === bt)?.[1], Ct = (e) => Object.values(e.devices).filter((e) => e !== void 0 && St(e) !== void 0), wt = (e, t) => {
	if (!et(e.config.version, "2026.10")) return { error: "release" };
	let n = Ct(e);
	if (t) {
		let e = n.find(({ id: e }) => e === t);
		return e ? { device: e } : { error: "not_found" };
	}
	let [r, ...i] = n;
	return r ? i.length > 0 ? { error: "several" } : { device: r } : { error: "none" };
}, Tt = (e, t) => {
	if (t) for (let n of xt) {
		if (!t.startsWith(n.translationPrefix) || !e.startsWith(n.keyPrefix)) continue;
		let r = t.slice(n.translationPrefix.length), i = e.slice(n.keyPrefix.length, r ? -(r.length + 1) : void 0);
		return {
			kind: n.kind,
			id: i,
			field: r || t
		};
	}
}, Et = (e) => {
	let [t, ...n] = e.map((e) => e.split(" "));
	if (!t || n.length === 0) return;
	let r = t.findIndex((e, t) => n.some((n) => n[t] !== e));
	return (r === -1 ? t : t.slice(0, r)).join(" ") || void 0;
}, Dt = (e, t, n) => {
	let r = St(t) ?? "", i = /* @__PURE__ */ new Map(), a = {
		audio_input: /* @__PURE__ */ new Map(),
		audio_output: /* @__PURE__ */ new Map(),
		battery: /* @__PURE__ */ new Map(),
		core: /* @__PURE__ */ new Map(),
		disk: /* @__PURE__ */ new Map(),
		display: /* @__PURE__ */ new Map(),
		gpu: /* @__PURE__ */ new Map(),
		interface: /* @__PURE__ */ new Map(),
		mount: /* @__PURE__ */ new Map()
	};
	for (let o of n) {
		let n = o.unique_id.slice(r.length + 1), s = $e(o.translation_key, n);
		if (s !== void 0 && !et(e.config.version, s) || o.platform !== bt || o.device_id !== t.id || o.hidden_by !== null || e.states[o.entity_id] === void 0 || !o.unique_id.startsWith(r)) continue;
		let c = Tt(n, o.translation_key);
		if (!c) {
			i.set(n || o.entity_id.slice(0, o.entity_id.indexOf(".")), o.entity_id);
			continue;
		}
		let l = a[c.kind].get(c.id) ?? {
			name: c.id,
			fields: /* @__PURE__ */ new Map(),
			labels: /* @__PURE__ */ new Map()
		};
		l.fields.set(c.field, o.entity_id), o.original_name && l.labels.set(c.field, o.original_name), a[c.kind].set(c.id, l);
	}
	for (let [e, t] of a.gpu) t.name = Et([...t.labels.values()]) ?? `GPU ${e}`;
	return {
		device: t,
		webClientUrl: t.configuration_url ? URL.parse(t.configuration_url)?.origin : void 0,
		single: i,
		items: a
	};
}, Ot, kt = (e) => (Ot?.entities !== e.entities && (Ot = {
	entities: e.entities,
	entries: e.connection.sendMessagePromise({ type: "config/entity_registry/list" })
}), Ot.entries), At = async (e, t) => Dt(e, t, await kt(e)), H = (e, t, n, r, i, a = 2) => `<rect x="${e}" y="${t}" width="${n}" height="${r}" rx="${a}" fill="currentColor" fill-opacity="${i}"/>`, U = (e, t, n, r, i = 3) => `<rect x="${e}" y="${t}" width="${n}" height="${r}" rx="${i}" stroke="currentColor" stroke-opacity="0.48" stroke-width="2"/>`, W = (e, t, n, r) => `<circle cx="${e}" cy="${t}" r="${n}" fill="currentColor" fill-opacity="${r}"/>`, G = (e, t) => `<path d="${e}" stroke="currentColor" stroke-opacity="${t}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`, K = (e, t) => `<path d="${e}" fill="currentColor" fill-opacity="${t}"/>`, q = (e, t) => Array.from({ length: e }, (e, n) => t(n)).join(""), jt = "M8 28 L22 24 L36 30 L50 14 L64 20 L78 10 L86 12", Mt = {
	storage: H(8, 10, 78, 6, .12, 3) + H(8, 10, 52, 6, .4, 3) + H(8, 19, 78, 6, .12, 3) + H(8, 19, 30, 6, .4, 3) + H(8, 28, 78, 6, .12, 3) + H(8, 28, 64, 6, .4, 3),
	audio: K("M14 17 L20 17 L28 10 L28 34 L20 27 L14 27 Z", .48) + H(36, 17, 50, 4, .12, 2) + H(36, 17, 34, 4, .4, 2) + H(36, 25, 30, 3, .24, 1.5),
	"now-playing": K("M12 12 L12 32 L28 22 Z", .48) + H(36, 17, 50, 3, .12, 1.5) + H(36, 17, 28, 3, .4, 1.5) + H(36, 25, 30, 3, .24, 1.5),
	"audio-outputs": K("M14 17 L20 17 L28 10 L28 34 L20 27 L14 27 Z", .48) + H(36, 15, 50, 4, .12, 2) + H(36, 15, 34, 4, .4, 2) + H(36, 25, 50, 4, .12, 2) + H(36, 25, 20, 4, .4, 2),
	"audio-inputs": H(17, 9, 10, 17, .48, 5) + G("M13 22 Q22 34 31 22 M22 30 L22 35", .48) + H(36, 15, 50, 4, .12, 2) + H(36, 15, 26, 4, .4, 2) + H(36, 25, 50, 4, .12, 2) + H(36, 25, 40, 4, .4, 2),
	"overview-load": G("M8 30 L22 24 L36 28 L50 16 L64 22 L78 12 L86 14", .72) + G("M8 34 L22 32 L36 33 L50 28 L64 30 L78 26 L86 27", .32),
	"overview-power": K("M46 6 L34 24 L43 24 L40 38 L56 18 L46 18 Z", .48),
	"overview-temperatures": H(24, 8, 8, 22, .24, 4) + W(28, 32, 6, .48) + H(26, 14, 4, 18, .48, 2) + G("M46 32 L56 24 L66 28 L78 12", .72),
	battery: U(24, 11, 44, 22, 4) + H(70, 18, 4, 8, .48, 1) + H(28, 15, 26, 14, .48),
	"device-batteries": q(3, (e) => U(10 + e * 26, 14, 18, 12, 3) + H(29 + e * 26, 18, 2, 4, .48, 1) + H(13 + e * 26, 17, [
		12,
		6,
		9
	][e] ?? 8, 6, .48, 1)),
	cpu: U(34, 10, 26, 24, 4) + H(41, 17, 12, 10, .48) + q(3, (e) => H(39 + e * 8, 5, 2, 5, .32, 1)) + q(3, (e) => H(39 + e * 8, 34, 2, 5, .32, 1)),
	"cpu-history": K(`${jt} L86 34 L8 34 Z`, .12) + G(jt, .72),
	"cpu-cores": q(8, (e) => H(8 + e % 4 * 20, 10 + Math.floor(e / 4) * 14, 18, 10, [
		.48,
		.24,
		.4,
		.12,
		.32,
		.48,
		.12,
		.24
	][e] ?? .24)),
	memory: U(8, 12, 78, 20, 3) + q(6, (e) => H(14 + e * 12, 18, 8, 8, e < 4 ? .48 : .12, 1)),
	"memory-history": G("M8 32 L24 32 L24 24 L40 24 L40 28 L58 28 L58 14 L72 14 L72 18 L86 18", .72),
	mount: H(8, 12, 78, 20, .12, 4) + H(14, 20, 40, 4, .32, 2) + W(76, 22, 3, .48),
	"disk-activity": q(11, (e) => {
		let t = [
			8,
			16,
			12,
			22,
			10,
			18,
			26,
			14,
			20,
			9,
			15
		][e] ?? 10;
		return H(10 + e * 7, 36 - t, 5, t, e % 2 == 0 ? .48 : .24, 1);
	}),
	display: U(24, 8, 46, 24, 3) + H(42, 32, 10, 3, .4) + H(36, 35, 22, 2, .4),
	gpu: U(12, 10, 70, 22, 3) + W(34, 21, 7, .32) + W(34, 21, 2.5, .48) + H(50, 16, 24, 3, .24, 1.5) + H(50, 23, 14, 3, .24, 1.5) + H(18, 32, 14, 3, .32),
	network: K("M30 8 L40 20 L34 20 L34 34 L26 34 L26 20 L20 20 Z", .48) + K("M64 36 L74 24 L68 24 L68 10 L60 10 L60 24 L54 24 Z", .32),
	"network-activity": G("M8 30 L18 24 L28 28 L38 14 L44 18", .72) + G("M50 34 L60 30 L70 32 L80 26 L86 28", .32),
	interface: W(20, 22, 6, .48) + W(74, 22, 6, .48) + H(26, 21, 42, 2, .32, 1) + H(43, 14, 8, 16, .24, 2),
	desktop: H(36, 20, 22, 16, .48, 3) + "<path d=\"M41 20 V15 A6 6 0 0 1 53 15 V20\" stroke=\"currentColor\" stroke-opacity=\"0.48\" stroke-width=\"2\"/>",
	processes: q(4, (e) => H(8, 9 + e * 8, 6, 5, .4, 1) + H(18, 9 + e * 8, [
		60,
		44,
		52,
		30
	][e] ?? 40, 5, .24)),
	"power-commands": q(3, (e) => H(10 + e * 26, 12, 22, 20, e === 0 ? .48 : .24, 4)),
	"saved-commands": H(10, 8, 30, 4, .48, 2) + q(3, (e) => H(10 + e * 26, 18, 22, 18, .24, 4)),
	notifications: K("M30 10 H60 A4 4 0 0 1 64 14 V28 A4 4 0 0 1 60 32 H40 L33 37 V32 H30 A4 4 0 0 1 26 28 V14 A4 4 0 0 1 30 10 Z", .24) + H(32, 16, 22, 3, .48, 1.5) + H(32, 23, 14, 3, .32, 1.5) + W(64, 11, 5, .48),
	power: U(8, 10, 36, 24) + H(13, 26, 26, 4, .48, 2) + U(50, 10, 36, 24) + H(56, 18, 24, 8, .24, 4) + W(76, 22, 3, .48),
	system: "<circle cx=\"47\" cy=\"22\" r=\"13\" stroke=\"currentColor\" stroke-opacity=\"0.48\" stroke-width=\"2\"/>" + W(47, 15.5, 2, .48) + H(45, 20, 4, 11, .48, 1)
}, Nt = (e, t) => {
	let n = t ? "white" : "black", r = `<svg width="94" height="44" viewBox="0 0 94 44" fill="none" color="${n}" xmlns="http://www.w3.org/2000/svg"><rect width="94" height="44" rx="8" fill="${t ? "#1C1C1C" : "white"}"/><rect x="0.5" y="0.5" width="93" height="43" rx="7.5" stroke="${n}" stroke-opacity="${t ? .24 : .12}"/>${Mt[e]}</svg>`;
	return `data:image/svg+xml,${encodeURIComponent(r)}`;
}, Pt = "custom:system-bridge", Ft = [
	"none",
	"bar",
	"trend"
], It = [
	"source",
	"playback",
	"volume_buttons",
	"volume_slider"
], Lt = [
	"source",
	"volume_buttons",
	"volume_slider"
], Rt = ["source", "playback"], zt = ["source", "volume_buttons"];
// \0@oxc-project+runtime@0.156.0/helpers/esm/decorate.js
function J(e, t, n, r) {
	var i = arguments.length, a = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, o;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
	return i > 3 && a && Object.defineProperty(t, n, a), a;
}
// src/editor.ts
var Bt = /* @__PURE__ */ new Map([
	["device_id", "Device"],
	["hours_to_show", "History"],
	["tile_feature", "Percentage tiles"],
	["page", "Page"],
	["item", "Item"],
	["show_icon_and_title", "Icon and title"],
	["show_top_links", "Web client link"],
	["max_columns", "Maximum columns"],
	["pages_options", "Page options"],
	["pages", "Pages"],
	["icon_and_title_pages", "Icon and title"],
	["top_links_pages", "Web client link"],
	["media_options", "Media"],
	["media_features", "Media tile"],
	["audio_options", "Audio"],
	["audio_features", "Audio tiles"],
	["show_input_source", "Audio input picker"]
]), Vt = /* @__PURE__ */ new Map([
	["source", "Source"],
	["playback", "Playback"],
	["volume_buttons", "Volume buttons"],
	["volume_slider", "Volume slider"]
]), Ht = (e) => ({ select: {
	multiple: !0,
	reorder: !0,
	mode: "dropdown",
	options: e.map((e) => ({
		value: e,
		label: Vt.get(e) ?? e
	}))
} }), Ut = /* @__PURE__ */ new Map([
	["none", "None"],
	["bar", "Bar"],
	["trend", "Trend"]
]), Wt = /* @__PURE__ */ new Map([
	["none", "Only the value"],
	["bar", "The percentage as a bar"],
	["trend", "Recent values as a graph"]
]), Gt = /* @__PURE__ */ new Map([
	["none", () => ""],
	["bar", (e) => `<rect x="8" y="32" width="78" height="6" rx="3" fill="${e}" fill-opacity="0.24"/><rect x="8" y="32" width="46" height="6" rx="3" fill="${e}" fill-opacity="0.48"/>`],
	["trend", (e) => `<path d="M8 37 L20 33 L32 36 L46 30 L60 34 L72 29 L86 32" stroke="${e}" stroke-opacity="0.72" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`]
]), Kt = (e, t) => {
	let n = t ? "#1C1C1C" : "white", r = t ? "white" : "black", i = Gt.get(e)?.(r) ?? "", a = `<svg width="94" height="44" viewBox="0 0 94 44" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="94" height="44" rx="8" fill="${n}"/><rect x="0.5" y="0.5" width="93" height="43" rx="7.5" stroke="${r}" stroke-opacity="${t ? .24 : .12}"/><circle cx="17" cy="15" r="7" fill="${r}" fill-opacity="${t ? .24 : .12}"/><rect x="30" y="9" width="30" height="3" rx="1.5" fill="${r}" fill-opacity="${t ? .72 : .48}"/><rect x="30" y="16" width="20" height="3" rx="1.5" fill="${r}" fill-opacity="${t ? .48 : .32}"/>${i}</svg>`;
	return `data:image/svg+xml,${encodeURIComponent(a)}`;
}, qt = {
	hours_to_show: 1,
	tile_feature: "bar",
	show_icon_and_title: !0,
	show_top_links: !0,
	show_input_source: !0,
	max_columns: 4,
	media_features: Rt,
	audio_features: zt
}, Y = B.map(({ page: e }) => e), X = (e, t) => t === void 0 || e !== void 0 && et(e, t), Jt = (e) => new Set(Y.filter((t) => !X(e, it.get(t)))), Yt = (e, t, n) => {
	let r = e.filter((e) => !n.has(e)), i;
	for (let e of t) n.has(e) && r.splice(i === void 0 ? 0 : r.indexOf(i) + 1, 0, e), r.includes(e) && (i = e);
	return r;
}, Xt = (e, t) => ({ select: {
	multiple: !0,
	reorder: e,
	mode: "dropdown",
	options: B.filter(({ page: e }) => t.includes(e)).map(({ page: e, title: t }) => ({
		value: e,
		label: t
	}))
} }), Zt = (e) => [{
	name: "pages_options",
	type: "expandable",
	flatten: !0,
	expanded: !0,
	schema: [
		{
			name: "pages",
			selector: Xt(!0, e)
		},
		{
			name: "icon_and_title_pages",
			selector: Xt(!1, e)
		},
		{
			name: "top_links_pages",
			selector: Xt(!1, e)
		}
	]
}], Qt = /* @__PURE__ */ new Map([["cpu", "CPU"], ["gpu", "GPU"]]), $t = (e) => {
	let [t = "", ...n] = e.split("-").map((e) => Qt.get(e) ?? e);
	return [t.charAt(0).toUpperCase() + t.slice(1), ...n].join(" ");
}, en = {
	storage: "Space used on every mount.",
	audio: "The default audio output, with its output picker and volume.",
	"now-playing": "The media playing, with source and playback controls.",
	"audio-outputs": "Volume of each audio output, such as speakers.",
	"audio-inputs": "Volume of each audio input, such as a microphone.",
	"overview-load": "CPU and memory load in one graph.",
	"overview-power": "Power draw, with a graph.",
	"overview-temperatures": "CPU and GPU temperatures, with a graph.",
	battery: "Battery level, state, time remaining, AC power, power draw and voltage.",
	"device-batteries": "Battery level and state of connected devices, such as a wireless mouse.",
	cpu: "CPU usage, speed, power, load average, temperature and voltage.",
	"cpu-history": "Graphs of CPU usage, speed, power, load average and temperature.",
	"cpu-cores": "Load and power of each CPU core.",
	memory: "Memory and swap in use, free and used.",
	"memory-history": "Graph of memory and swap usage.",
	mount: "One mount point: space used. Set the item to the mount point.",
	"disk-activity": "Disk read and write rates, in total and per disk.",
	display: "One display: power, brightness, resolution and refresh rate. Set the item to the display name.",
	gpu: "One GPU: load, encoder and decoder, memory, power, temperature, clocks, fan and performance state. Set the item to the GPU name.",
	network: "Download and upload rates, with a graph.",
	"network-activity": "Download and upload rates, with a graph of each.",
	interface: "One network interface: rates, Wi-Fi details and a graph. Set the item to the interface name.",
	desktop: "Whether the session is locked, and how long it's been idle.",
	processes: "The number of processes, with a graph.",
	"power-commands": "Buttons to lock, log out, sleep, hibernate, restart or shut down.",
	"saved-commands": "A button for each saved command.",
	notifications: "The notify entity, and the last notification event, such as clicked or closed.",
	power: "The power profile, and a switch to keep the device awake.",
	system: "Device power usage and whether the camera is in use."
}, tn = (e, t) => B.filter(({ page: n }) => n === V(e)?.page || X(t, it.get(n))).flatMap(({ page: e, title: t, description: n, sections: [r] }) => r ? [{
	value: e,
	label: t,
	description: n,
	image: {
		src: Nt(r, !1),
		src_dark: Nt(r, !0)
	}
}] : []), nn = (e, t) => (V(e)?.sections ?? []).filter((n) => Q(e).includes(n) || X(t, nt.get(n))).map((e) => ({
	value: e,
	label: $t(e),
	description: en[e],
	image: {
		src: Nt(e, !1),
		src_dark: Nt(e, !0)
	}
})), rn = (e) => e.currentTarget instanceof HTMLElement ? e.currentTarget.dataset.value : void 0, an = "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z", on = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", sn = /* @__PURE__ */ new Map([
	["device_id", "The System Bridge device to show."],
	["page", "The web client page this view shows."],
	["item", "For sections about one thing: its mount point, GPU, display or interface name."],
	["hours_to_show", "Hours that graphs go back."],
	["max_columns", "The most columns of sections a page shows side by side on a wide screen."],
	["tile_feature", "Shown under percentages such as CPU and memory usage."],
	["show_icon_and_title", "Show the icon next to the title in the tab."],
	["show_top_links", "Show a link to the System Bridge web client at the top."],
	["pages", "In tab order. Drag to reorder, remove to hide."],
	["icon_and_title_pages", "Pages whose tab shows the icon next to the title."],
	["top_links_pages", "Pages with a link to the web client at the top."],
	["media_features", "Controls on the Media tile, in order. Drag to reorder, remove to hide."],
	["audio_features", "Controls on the Audio and output tiles, in order. Drag to reorder, remove to hide."],
	["show_input_source", "Choose the default audio input."]
]), cn = /* @__PURE__ */ new Set([
	"overview-load",
	"overview-power",
	"overview-temperatures",
	"cpu-history",
	"memory-history",
	"disk-activity",
	"gpu",
	"network",
	"network-activity",
	"interface",
	"desktop",
	"processes"
]), ln = /* @__PURE__ */ new Set([
	"battery",
	"device-batteries",
	"cpu",
	"memory",
	"mount",
	"gpu"
]), un = /* @__PURE__ */ new Map([
	["mount", "mount"],
	["gpu", "gpu"],
	["display", "display"],
	["interface", "interface"]
]), dn = [
	"media_features",
	"audio_features",
	"show_input_source"
], fn = /* @__PURE__ */ new Map([
	["audio", ["audio_features"]],
	["now-playing", ["media_features"]],
	["audio-outputs", ["audio_features"]],
	["audio-inputs", ["show_input_source"]]
]), pn = /* @__PURE__ */ new Map([
	["overview", ["media_features", "audio_features"]],
	["media", ["media_features"]],
	["audio", ["audio_features", "show_input_source"]]
]), mn = [{
	name: "media_options",
	options: ["media_features"]
}, {
	name: "audio_options",
	options: ["audio_features", "show_input_source"]
}], Z = (e) => "module" in e || "sections" in e || "section" in e, Q = (e) => Z(e) ? yt(e).sections : [], hn = (e) => {
	if (Z(e)) {
		let t = Q(e).flatMap((e) => fn.get(e) ?? []);
		return dn.filter((e) => t.includes(e));
	}
	return "page" in e ? pn.get(e.page) ?? [] : dn;
}, gn = (e, t) => [...fn].some(([n, r]) => r.includes(e) && X(t, nt.get(n))), _n = (e, t) => {
	let n = hn(e).filter((e) => gn(e, t));
	return mn.flatMap(({ name: t, options: r }) => {
		let i = r.filter((e) => n.includes(e));
		return i.length > 0 ? [{
			name: t,
			type: "expandable",
			flatten: !0,
			expanded: Z(e),
			schema: i.map((e) => ({
				name: e,
				selector: vn(e)
			}))
		}] : [];
	});
}, vn = (e) => {
	switch (e) {
		case "media_features": return Ht(It);
		case "audio_features": return Ht(Lt);
		case "show_input_source": return { boolean: {} };
	}
}, yn = (e, t) => e.length === t.length && e.every((e, n) => e === t[n]), bn = {
	name: "device_id",
	selector: { device: { integration: "system_bridge" } }
}, xn = (e, t, n) => [
	bn,
	..."page" in e ? [{
		name: "page",
		required: !0,
		selector: { select: {
			mode: "dropdown",
			options: B.filter(({ page: t }) => t === e.page || X(n, it.get(t))).map(({ page: e, title: t }) => ({
				value: e,
				label: t
			}))
		} }
	}] : [],
	..."page" in e ? [{
		name: "links_and_titles",
		type: "grid",
		flatten: !0,
		column_min_width: "200px",
		schema: [{
			name: "show_icon_and_title",
			selector: { boolean: {} }
		}, {
			name: "show_top_links",
			selector: { boolean: {} }
		}]
	}] : [],
	...Z(e) ? [] : [{
		name: "max_columns",
		selector: { number: {
			min: 1,
			max: 6,
			mode: "slider",
			slider_ticks: !0
		} }
	}],
	...Z(e) ? [...Q(e).some((e) => un.has(e)) ? [{
		name: "item",
		required: !0,
		selector: { select: {
			mode: "dropdown",
			sort: !0,
			options: t
		} }
	}] : []] : [],
	...!Z(e) || Q(e).some((e) => cn.has(e)) ? [{
		name: "hours_to_show",
		selector: { number: {
			min: 1,
			max: 48,
			mode: "slider",
			slider_ticks: !0,
			unit_of_measurement: "h"
		} }
	}] : [],
	...!Z(e) || Q(e).some((e) => ln.has(e)) ? [{
		name: "tile_feature",
		selector: { select: {
			mode: "box",
			box_max_columns: 3,
			options: Ft.map((e) => ({
				value: e,
				label: Ut.get(e) ?? e,
				description: Wt.get(e),
				image: {
					src: Kt(e, !1),
					src_dark: Kt(e, !0)
				}
			}))
		} }
	}] : [],
	..._n(e, n)
], Sn = (e) => !("page" in e) && !Z(e), $ = class extends T {
	constructor(...e) {
		super(...e), this._pickingModule = !1, this._changeModule = () => {
			this._pickingModule = !0;
		}, this._moduleClicked = (e) => {
			let t = rn(e);
			t !== void 0 && (this._pickingModule = !1, this._changeConfig({ module: t }));
		}, this._sectionClicked = (e) => {
			let t = rn(e);
			if (!this._config || !Z(this._config) || t === void 0 || !L(t)) return;
			let n = Q(this._config);
			this._changeConfig({ sections: n.includes(t) ? n.filter((e) => e !== t) : [...n, t] });
		}, this._computeLabel = (e) => Bt.get(e.name) ?? e.name, this._computeHelper = (e) => sn.get(e.name), this._generalChanged = (e) => {
			e.stopPropagation(), this._changeConfig(e.detail.value);
		};
	}
	setConfig(e) {
		!this._config && Z(e) && mt(e) && (this._pickingModule = !0), this._config = e;
	}
	willUpdate() {
		let e = this.hass, t = this._config;
		if (!e || !t || !Z(t)) return;
		let n = t.device_id ?? "";
		if (this._entitiesFor === n) return;
		this._entitiesFor = n;
		let r = wt(e, t.device_id);
		"device" in r ? At(e, r.device).then((e) => {
			this._entitiesFor === n && (this._entities = e);
		}) : this._entities = void 0;
	}
	_itemOptions(e) {
		if (!Z(e)) return [];
		let t = Q(e).map((e) => un.get(e)).find((e) => e !== void 0), n = t ? [...this._entities?.items[t] ?? []].map(([e, t]) => ({
			value: e,
			label: t.name
		})) : [];
		return e.item && !n.some(({ value: t }) => t === e.item) && n.push({
			value: e.item,
			label: e.item
		}), n;
	}
	render() {
		if (!this._config) return S;
		let e = this._config, t = this.hass?.config.version;
		if (Z(e)) {
			let n = V(e);
			return this._pickingModule || !n ? b`
            <ha-form
              .hass=${this.hass}
              .data=${{ device_id: e.device_id }}
              .schema=${[bn]}
              .computeLabel=${this._computeLabel}
              .computeHelper=${this._computeHelper}
              @value-changed=${this._generalChanged}
            ></ha-form>
            ${this._renderBoxes(tn(e, t), (e) => e === n?.page, this._moduleClicked)}
          ` : b`
            <div class="back-title">
              <ha-icon-button
                .label=${"Change module"}
                .path=${document.dir === "rtl" ? on : an}
                @click=${this._changeModule}
              ></ha-icon-button>
              <span>${n.title}</span>
            </div>
            ${this._renderBoxes(nn(e, t), (t) => Q(e).some((e) => e === t), this._sectionClicked, !0)}
            <ha-form
              .hass=${this.hass}
              .data=${{
				...qt,
				...e
			}}
              .schema=${xn(e, this._itemOptions(e), t)}
              .computeLabel=${this._computeLabel}
              .computeHelper=${this._computeHelper}
              @value-changed=${this._generalChanged}
            ></ha-form>
          `;
		}
		let n = Jt(t), r = (e) => e.filter((e) => !n.has(e)), i = Sn(e) ? b`<ha-form
          .hass=${this.hass}
          .data=${{
			pages: r(e.pages ?? Y),
			icon_and_title_pages: r(e.icon_and_title_pages ?? Y),
			top_links_pages: r(e.top_links_pages ?? Y)
		}}
          .schema=${Zt(r(Y))}
          .computeLabel=${this._computeLabel}
          .computeHelper=${this._computeHelper}
          @value-changed=${this._generalChanged}
        ></ha-form>` : S;
		return b`
      <ha-form
        .hass=${this.hass}
        .data=${{
			...qt,
			...e
		}}
        .schema=${xn(e, this._itemOptions(e), t)}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._generalChanged}
      ></ha-form>
      ${i}
    `;
	}
	_renderBoxes(e, t, n, r = !1) {
		let i = this.hass?.themes?.darkMode ?? !1;
		return b`<div class="boxes">${e.map((e) => {
			let a = t(e.value);
			return b`
        <button
          type="button"
          class="option ${a ? "selected" : ""}"
          aria-pressed=${a}
          data-value=${e.value}
          @click=${n}
        >
          <div class="content">
            ${r ? b`<ha-checkbox
                    .checked=${a}
                    tabindex="-1"
                  ></ha-checkbox>` : S}
            <div class="text">
              <span class="label">${e.label}</span>
              <span class="description">${e.description}</span>
            </div>
          </div>
          <img alt="" src=${i ? e.image.src_dark : e.image.src} />
        </button>
      `;
		})}</div>`;
	}
	_changeConfig(e) {
		if (!this._config) return;
		let t = {
			...this._config,
			...e
		};
		if (t.hours_to_show === 1 && delete t.hours_to_show, t.tile_feature === "bar" && delete t.tile_feature, "show_icon_and_title" in t && t.show_icon_and_title && delete t.show_icon_and_title, "show_top_links" in t && t.show_top_links && delete t.show_top_links, "max_columns" in t && t.max_columns === 4 && delete t.max_columns, t.media_features && yn(t.media_features, Rt) && delete t.media_features, t.audio_features && yn(t.audio_features, zt) && delete t.audio_features, t.show_input_source && delete t.show_input_source, Z(t) && Z(this._config)) {
			let e = V(this._config)?.page;
			t.module ??= e, t.sections ??= [...Q(this._config)], t.module === e ? t.sections = _t(t.module, t.sections.filter(L)) : (t.sections = [], delete t.item), delete t.section, Q(t).some((e) => un.has(e)) || delete t.item;
		}
		if (Sn(t)) {
			let e = Sn(this._config) ? this._config : void 0, n = Jt(this.hass?.config.version);
			for (let r of [
				"pages",
				"icon_and_title_pages",
				"top_links_pages"
			]) {
				let i = t[r];
				i && (t[r] = Yt(i, e?.[r] ?? Y, n));
			}
			t.pages && yn(t.pages, Y) && delete t.pages;
			let r = (e) => e && yn([...e].sort(), [...Y].sort());
			r(t.icon_and_title_pages) && delete t.icon_and_title_pages, r(t.top_links_pages) && delete t.top_links_pages;
		}
		this._emit(t);
	}
	_emit(e) {
		this.dispatchEvent(new CustomEvent("config-changed", {
			detail: { config: e },
			bubbles: !0,
			composed: !0
		}));
	}
	static {
		this.styles = o`
    :host {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    /* The heading of Home Assistant's own sub-editors, as for a tile feature */
    .back-title {
      display: flex;
      align-items: center;
      font-size: var(--ha-font-size-l);
    }

    .boxes {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: var(--ha-space-3, 12px);
    }

    .option {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: var(--ha-space-2, 8px);
      padding: 12px;
      overflow: hidden;
      border: 1px solid var(--divider-color);
      border-radius: var(--ha-card-border-radius, var(--ha-border-radius-lg));
      background: none;
      color: inherit;
      font: inherit;
      text-align: start;
      cursor: pointer;
    }

    .option:before {
      content: "";
      position: absolute;
      inset: 0;
      background-color: transparent;
      pointer-events: none;
      opacity: 0.2;
      transition:
        background-color 180ms ease-in-out,
        opacity 180ms ease-in-out;
    }

    .option:hover:before {
      background-color: var(--divider-color);
    }

    .option.selected:before {
      background-color: var(--primary-color);
    }

    .content {
      display: flex;
      gap: var(--ha-space-2, 8px);
      width: 100%;
      min-width: 0;
    }

    ha-checkbox {
      flex: none;
      margin: 0;
      pointer-events: none;
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: var(--ha-space-1, 4px);
      flex: 1;
      min-width: 0;
    }

    .label {
      color: var(--primary-text-color);
      font-size: var(--ha-font-size-m);
      line-height: var(--ha-line-height-condensed);
    }

    .description {
      color: var(--secondary-text-color);
      font-size: var(--ha-font-size-s);
      line-height: var(--ha-line-height-condensed);
    }

    img {
      max-width: var(--ha-select-box-image-size, 96px);
      max-height: var(--ha-select-box-image-size, 96px);
      margin: auto;
    }
  `;
	}
};
J([He({ attribute: !1 })], $.prototype, "hass", void 0), J([Ue()], $.prototype, "_config", void 0), J([Ue()], $.prototype, "_entities", void 0), J([Ue()], $.prototype, "_pickingModule", void 0), $ = J([E("system-bridge-strategy-editor")], $);
// src/section-strategy.ts
var Cn = ["entities", "devices"], wn = {
	release: `The System Bridge dashboard needs Home Assistant ${Xe} or later.`,
	none: "No System Bridge devices found. Add the System Bridge integration first.",
	several: "There are several System Bridge devices. Choose one in the settings.",
	not_found: "The System Bridge device was not found. Choose another in the settings."
}, Tn = (e) => wn[e.error], En = (e, { sections: t, item: n, link: r }, i) => {
	let a = {
		entities: e,
		item: n,
		link: r,
		hours: i.hours_to_show ?? 1,
		percentage: Ge(i.tile_feature ?? "bar"),
		mediaFeatures: i.media_features ?? Rt,
		audioFeatures: i.audio_features ?? zt,
		inputSource: i.show_input_source ?? !0
	};
	return ot(t.map((e) => ft[e](a)));
}, Dn = (e) => ({
	type: "grid",
	cards: [{
		type: "markdown",
		content: e
	}]
}), On = class extends p {
	static {
		this.registryDependencies = Cn;
	}
	static async generate(e, t) {
		let { sections: n, unknown: r } = yt(e);
		if (r.length > 0) return Dn(`Unknown System Bridge section ${r.map((e) => `"${e}"`).join(", ")}.`);
		if (n.length === 0) return Dn("Choose a System Bridge section in the settings.");
		let i = wt(t, e.device_id);
		return "error" in i ? Dn(Tn(i)) : En(await At(t, i.device), {
			sections: n,
			item: e.item,
			link: e.link
		}, e) ?? Dn("No System Bridge entities for this section.");
	}
	static getConfigElement() {
		return document.createElement("system-bridge-strategy-editor");
	}
	static getStubConfig(e) {
		if (!et(e.config.version, "2026.10")) return;
		let t = /* @__PURE__ */ new Map();
		for (let n of Object.values(e.entities)) n?.device_id && t.set(n.device_id, (t.get(n.device_id) ?? 0) + 1);
		let [n] = Ct(e).sort((e, n) => (t.get(n.id) ?? 0) - (t.get(e.id) ?? 0));
		return n ? {
			type: Pt,
			device_id: n.id,
			module: pt.module,
			sections: [...pt.sections]
		} : void 0;
	}
};
On = J([E("ll-strategy-section-system-bridge")], On);
// src/view-strategy.ts
var kn = (e, t, n, r = /* @__PURE__ */ new Set()) => e.layout(t).flatMap((e) => {
	let r = En(t, e, n);
	return r ? [{
		ref: e,
		columnSpan: r.column_span
	}] : [];
}).map(({ ref: { link: i, sections: a, item: o }, columnSpan: s }) => {
	let c = {
		type: Pt,
		device_id: t.device.id,
		module: e.page,
		sections: a
	};
	return o !== void 0 && (c.item = o), i !== void 0 && r.has(i) && (c.link = i), n.hours_to_show !== void 0 && (c.hours_to_show = n.hours_to_show), n.tile_feature !== void 0 && (c.tile_feature = n.tile_feature), n.media_features !== void 0 && (c.media_features = n.media_features), n.audio_features !== void 0 && (c.audio_features = n.audio_features), n.show_input_source !== void 0 && (c.show_input_source = n.show_input_source), s ? {
		strategy: c,
		column_span: s
	} : { strategy: c };
}), An = (e, t, n, r) => ({
	type: "sections",
	title: e.title,
	path: e.page,
	icon: e.icon,
	show_icon_and_title: n.show_icon_and_title ?? !0,
	max_columns: n.max_columns ?? 4,
	badges: [...n.show_top_links === !1 ? [] : qe(t, e.page, e.title), ...e.diagnostics ? Ye(t) : []],
	sections: kn(e, t, n, r)
}), jn = class extends p {
	static {
		this.registryDependencies = Cn;
	}
	static async generate(e, t) {
		let n = B.find(({ page: t }) => t === e.page);
		if (!n) return {
			title: "System Bridge",
			cards: [{
				type: "markdown",
				content: `Unknown System Bridge page "${e.page}".`
			}]
		};
		let r = wt(t, e.device_id);
		return "error" in r ? {
			title: n.title,
			cards: [{
				type: "markdown",
				content: Tn(r)
			}]
		} : An(n, await At(t, r.device), e);
	}
	static getConfigElement() {
		return document.createElement("system-bridge-strategy-editor");
	}
};
jn = J([E("ll-strategy-view-system-bridge")], jn);
// src/dashboard-strategy.ts
var Mn = class extends p {
	static {
		this.registryDependencies = Cn;
	}
	static async generate(e, t) {
		let n = wt(t, e.device_id);
		if ("error" in n) return { views: [{
			title: "System Bridge",
			cards: [{
				type: "markdown",
				content: Tn(n)
			}]
		}] };
		let r = await At(t, n.device), i = (e.pages ?? B.map(({ page: e }) => e)).flatMap((e) => B.filter(({ page: t }) => t === e)).filter((t) => kn(t, r, e).length > 0), a = new Set(i.map(({ page: e }) => e));
		return { views: i.map((t) => An(t, r, {
			...e,
			show_icon_and_title: e.icon_and_title_pages?.includes(t.page) ?? !0,
			show_top_links: e.top_links_pages?.includes(t.page) ?? !0
		}, a)) };
	}
	static getCreateSuggestions() {
		return {
			title: "System Bridge",
			icon: "mdi:desktop-tower-monitor"
		};
	}
	static getConfigElement() {
		return document.createElement("system-bridge-strategy-editor");
	}
};
Mn = J([E("ll-strategy-dashboard-system-bridge")], Mn);
// src/index.ts
var Nn = "https://system-bridge.timmo.dev/using/home-assistant/#dashboard", Pn = [{
	strategyType: "dashboard",
	description: "Your computer's System Bridge data, laid out like the web client."
}, {
	strategyType: "section",
	description: "One part of a System Bridge page, such as a GPU or a disk."
}];
window.customStrategies ??= [];
for (let { strategyType: e, description: t } of Pn) window.customStrategies.some((t) => t.type === "system-bridge" && t.strategyType === e) || window.customStrategies.push({
	type: "system-bridge",
	name: "System Bridge",
	description: t,
	documentationURL: Nn,
	strategyType: e
});
