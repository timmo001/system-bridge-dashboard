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
})(e) : e, { is: l, defineProperty: u, getOwnPropertyDescriptor: ee, getOwnPropertyNames: te, getOwnPropertySymbols: ne, getPrototypeOf: re } = Object, d = globalThis, ie = d.trustedTypes, ae = ie ? ie.emptyScript : "", oe = d.reactiveElementPolyfillSupport, f = (e, t) => e, p = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? ae : null;
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
}, se = (e, t) => !l(e, t), ce = {
	attribute: !0,
	type: String,
	converter: p,
	reflect: !1,
	useDefault: !1,
	hasChanged: se
};
Symbol.metadata ??= Symbol("metadata"), d.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var m = class extends HTMLElement {
	static addInitializer(e) {
		this._$Ei(), (this.l ??= []).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = ce) {
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
		return this.elementProperties.get(e) ?? ce;
	}
	static _$Ei() {
		if (this.hasOwnProperty(f("elementProperties"))) return;
		let e = re(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(f("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(f("properties"))) {
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
			let i = (n.converter?.toAttribute === void 0 ? p : n.converter).toAttribute(t, n.type);
			this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? p : e.converter;
			this._$Em = r;
			let a = i.fromAttribute(t, e.type);
			this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
		}
	}
	requestUpdate(e, t, n, r = !1, i) {
		if (e !== void 0) {
			let a = this.constructor;
			if (!1 === r && (i = this[e]), n ??= a.getPropertyOptions(e), !((n.hasChanged ?? se)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(a._$Eu(e, n)))) return;
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
m.elementStyles = [], m.shadowRootOptions = { mode: "open" }, m[f("elementProperties")] = /* @__PURE__ */ new Map(), m[f("finalized")] = /* @__PURE__ */ new Map(), oe?.({ ReactiveElement: m }), (d.reactiveElementVersions ??= []).push("2.1.2");
// ../../../node_modules/lit-html/lit-html.js
var le = globalThis, ue = (e) => e, h = le.trustedTypes, de = h ? h.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, fe = "$lit$", g = `lit$${Math.random().toFixed(9).slice(2)}$`, pe = "?" + g, me = `<${pe}>`, _ = document, v = () => _.createComment(""), y = (e) => e === null || typeof e != "object" && typeof e != "function", he = Array.isArray, ge = (e) => he(e) || typeof e?.[Symbol.iterator] == "function", _e = "[ 	\n\f\r]", b = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ve = /-->/g, ye = />/g, x = RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), be = /'/g, xe = /"/g, Se = /^(?:script|style|textarea|title)$/i, Ce = ((e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}))(1), S = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), we = /* @__PURE__ */ new WeakMap(), w = _.createTreeWalker(_, 129);
function Te(e, t) {
	if (!he(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return de === void 0 ? t : de.createHTML(t);
}
var Ee = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = b;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === b ? c[1] === "!--" ? o = ve : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = x) : (Se.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = x) : o = ye : o === x ? c[0] === ">" ? (o = i ?? b, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? x : c[3] === "\"" ? xe : be) : o === xe || o === be ? o = x : o === ve || o === ye ? o = b : (o = x, i = void 0);
		let ee = o === x && e[t + 1].startsWith("/>") ? " " : "";
		a += o === b ? n + me : l >= 0 ? (r.push(s), n.slice(0, l) + fe + n.slice(l) + g + ee) : n + g + (l === -2 ? t : ee);
	}
	return [Te(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, De = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = Ee(t, n);
		if (this.el = e.createElement(l, r), w.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = w.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(fe)) {
					let t = u[o++], n = i.getAttribute(e).split(g), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? Ae : r[1] === "?" ? je : r[1] === "@" ? Me : E
					}), i.removeAttribute(e);
				} else e.startsWith(g) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (Se.test(i.tagName)) {
					let e = i.textContent.split(g), t = e.length - 1;
					if (t > 0) {
						i.textContent = h ? h.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], v()), w.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], v());
					}
				}
			} else if (i.nodeType === 8) {
				if (i.data === pe) c.push({
					type: 2,
					index: a
				});
				else {
					let e = -1;
					for (; (e = i.data.indexOf(g, e + 1)) !== -1;) c.push({
						type: 7,
						index: a
					}), e += g.length - 1;
				}
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = _.createElement("template");
		return n.innerHTML = e, n;
	}
};
function T(e, t, n = e, r) {
	if (t === S) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = y(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = T(e, i._$AS(e, t.values), i, r)), t;
}
var Oe = class {
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
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? _).importNode(t, !0);
		w.currentNode = r;
		let i = w.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new ke(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new Ne(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = w.nextNode(), a++);
		}
		return w.currentNode = _, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, ke = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
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
		e = T(this, e, t), y(e) ? e === C || e == null || e === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== S && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? ge(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== C && y(this._$AH) ? this._$AA.nextSibling.data = e : this.T(_.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = De.createElement(Te(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new Oe(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = we.get(e.strings);
		return t === void 0 && we.set(e.strings, t = new De(e)), t;
	}
	k(t) {
		he(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(v()), this.O(v()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, t) {
		for (this._$AP?.(!1, !0, t); e !== this._$AB;) {
			let t = ue(e).nextSibling;
			ue(e).remove(), e = t;
		}
	}
	setConnected(e) {
		this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
	}
}, E = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = C, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = C;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = T(this, e, t, 0), a = !y(e) || e !== this._$AH && e !== S, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = T(this, r[n + o], t, o), s === S && (s = this._$AH[o]), a ||= !y(s) || s !== this._$AH[o], s === C ? e = C : e !== C && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, Ae = class extends E {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === C ? void 0 : e;
	}
}, je = class extends E {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== C);
	}
}, Me = class extends E {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = T(this, e, t, 0) ?? C) === S) return;
		let n = this._$AH, r = e === C && n !== C || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== C && (n === C || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, Ne = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		T(this, e);
	}
}, Pe = le.litHtmlPolyfillSupport;
Pe?.(De, ke), (le.litHtmlVersions ??= []).push("3.3.3");
var Fe = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new ke(t.insertBefore(v(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, Ie = globalThis, D = class extends m {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Fe(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return S;
	}
};
D._$litElement$ = !0, D.finalized = !0, Ie.litElementHydrateSupport?.({ LitElement: D });
var Le = Ie.litElementPolyfillSupport;
Le?.({ LitElement: D }), (Ie.litElementVersions ??= []).push("4.2.2");
// ../../../node_modules/@lit/reactive-element/decorators/custom-element.js
var O = (e) => (t, n) => {
	n === void 0 ? customElements.define(e, t) : n.addInitializer(() => {
		customElements.define(e, t);
	});
}, Re = {
	attribute: !0,
	type: String,
	converter: p,
	reflect: !1,
	hasChanged: se
}, ze = (e = Re, t, n) => {
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
function Be(e) {
	return (t, n) => typeof n == "object" ? ze(e, t, n) : ((e, t, n) => {
		let r = t.hasOwnProperty(n);
		return t.constructor.createProperty(n, e), r ? Object.getOwnPropertyDescriptor(t, n) : void 0;
	})(e, t, n);
}
// ../../../node_modules/@lit/reactive-element/decorators/state.js
function Ve(e) {
	return Be({
		...e,
		state: !0,
		attribute: !1
	});
}
// src/cards.ts
var He = /* @__PURE__ */ new Set(["select-options", "toggle"]), k = (e, t, n) => {
	let r = {
		type: "tile",
		entity: e,
		name: n ?? [{ type: "entity" }]
	};
	return t && (r.features = t), t?.some(({ type: e }) => He.has(e)) && (r.state_content = "last_updated"), r;
}, Ue = (e) => {
	switch (e) {
		case "bar": return [{ type: "bar-gauge" }];
		case "trend": return [{ type: "trend-graph" }];
		case "none": return;
	}
}, A = (e, t, n) => {
	let r = {
		type: "heading",
		heading: e
	};
	return t && (r.icon = t), n && (r.tap_action = {
		action: "navigate",
		navigation_path: n
	}), r;
}, We = (e, t, n) => {
	let r = {
		type: "history-graph",
		hours_to_show: t,
		entities: e
	};
	return n && (r.title = n), r;
}, Ge = (e, t, n) => {
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
}, Ke = [
	["update", "Update"],
	["version", "Version"],
	["os", "OS"],
	["kernel", "Kernel"],
	["boot_time", "Booted"],
	["pending_reboot", "Pending reboot"],
	["displays_connected", "Displays"]
], qe = (e) => Ke.flatMap(([t, n]) => {
	let r = e.single.get(t);
	return r ? [{
		type: "entity",
		entity: r,
		name: n,
		show_name: !0,
		show_state: !0
	}] : [];
}), j = (e, t, n) => [...e.items[t].keys()].map((e) => ({
	section: n,
	item: e
})), M = [
	{
		page: "overview",
		title: "Overview",
		icon: "mdi:view-dashboard-outline",
		diagnostics: !0,
		sections: () => [
			{
				section: "storage",
				link: "disks"
			},
			{
				section: "audio",
				link: "audio"
			},
			{
				section: "now-playing",
				link: "media"
			},
			{
				section: "overview-load",
				link: "cpu"
			},
			{
				section: "network",
				link: "networks"
			},
			{
				section: "overview-power",
				link: "system"
			},
			{
				section: "overview-temperatures",
				link: "cpu"
			}
		]
	},
	{
		page: "audio",
		title: "Audio",
		icon: "mdi:volume-high",
		sections: () => [{ section: "audio-outputs" }, { section: "audio-inputs" }]
	},
	{
		page: "battery",
		title: "Battery",
		icon: "mdi:battery",
		sections: () => [{ section: "battery" }, { section: "device-batteries" }]
	},
	{
		page: "cpu",
		title: "CPU",
		icon: "mdi:cpu-64-bit",
		sections: () => [
			{ section: "cpu" },
			{ section: "cpu-history" },
			{ section: "cpu-cores" }
		]
	},
	{
		page: "desktop",
		title: "Desktop",
		icon: "mdi:application-outline",
		sections: () => [{ section: "desktop" }]
	},
	{
		page: "disks",
		title: "Disks",
		icon: "mdi:harddisk",
		sections: (e) => [...j(e, "mount", "mount"), { section: "disk-activity" }]
	},
	{
		page: "displays",
		title: "Displays",
		icon: "mdi:monitor",
		sections: (e) => j(e, "display", "display")
	},
	{
		page: "gpus",
		title: "GPUs",
		icon: "mdi:expansion-card-variant",
		sections: (e) => j(e, "gpu", "gpu")
	},
	{
		page: "media",
		title: "Media",
		icon: "mdi:play-circle-outline",
		sections: () => [{ section: "now-playing" }]
	},
	{
		page: "memory",
		title: "Memory",
		icon: "mdi:memory",
		sections: () => [{ section: "memory" }, { section: "memory-history" }]
	},
	{
		page: "networks",
		title: "Networks",
		icon: "mdi:lan",
		sections: (e) => [{ section: "network" }, ...j(e, "interface", "interface")]
	},
	{
		page: "processes",
		title: "Processes",
		icon: "mdi:application-cog-outline",
		sections: () => [{ section: "processes" }]
	},
	{
		page: "system",
		title: "System",
		icon: "mdi:information-outline",
		diagnostics: !0,
		sections: () => [
			{ section: "system" },
			{ section: "power" },
			{ section: "commands" }
		]
	}
], Je = "2026.10", Ye = /* @__PURE__ */ new Map([
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
	["power_profile", "2026.12"]
]), N = (e) => {
	let [t = 0, n = 0] = e.split(".").map((e) => Number.parseInt(e, 10));
	return t * 100 + n;
}, P = (e, t) => N(e) >= N(t), Xe = (e) => e.reduce((e, t) => e === void 0 || t === void 0 ? void 0 : N(t) < N(e) ? t : e, e[0]), F = (e, ...t) => [e, Xe(t.map((e) => Ye.get(e)))], Ze = new Map([
	F("audio", "audio"),
	F("audio-outputs", "audio", "audio_output"),
	F("audio-inputs", "audio_input", "audio_input_mute", "audio_input_volume"),
	F("device-batteries", "battery_info", "battery_info_state"),
	F("disk-activity", "disk_read_rate", "disk_write_rate", "disk_device_read_rate", "disk_device_write_rate"),
	F("network", "network_download_rate", "network_upload_rate"),
	F("interface", "network_interface_download_rate", "network_interface_upload_rate", "network_interface_ssid", "network_interface_signal_strength", "network_interface_link_rate"),
	F("desktop", "locked", "idle_time"),
	F("commands", "power_lock", "power_logout", "power_sleep", "power_hibernate", "power_restart", "power_shutdown"),
	F("power", "power_profile", "keep_awake")
]), Qe = (e, ...t) => [e, Xe(t.map((e) => Ze.get(e)))], $e = new Map([
	Qe("audio", "audio-outputs", "audio-inputs"),
	Qe("desktop", "desktop"),
	Qe("networks", "network", "interface")
]), et = "system_bridge", tt = [
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
], nt = (e) => e.identifiers.find(([e]) => e === et)?.[1], rt = (e) => Object.values(e.devices).filter((e) => e !== void 0 && nt(e) !== void 0), I = (e, t) => {
	if (!P(e.config.version, "2026.10")) return { error: "release" };
	let n = rt(e);
	if (t) {
		let e = n.find(({ id: e }) => e === t);
		return e ? { device: e } : { error: "not_found" };
	}
	let [r, ...i] = n;
	return r ? i.length > 0 ? { error: "several" } : { device: r } : { error: "none" };
}, it = (e, t) => {
	if (t) for (let n of tt) {
		if (!t.startsWith(n.translationPrefix) || !e.startsWith(n.keyPrefix)) continue;
		let r = t.slice(n.translationPrefix.length), i = e.slice(n.keyPrefix.length, r ? -(r.length + 1) : void 0);
		return {
			kind: n.kind,
			id: i,
			field: r || t
		};
	}
}, at = (e) => {
	let [t, ...n] = e.map((e) => e.split(" "));
	if (!t || n.length === 0) return;
	let r = t.findIndex((e, t) => n.some((n) => n[t] !== e));
	return (r === -1 ? t : t.slice(0, r)).join(" ") || void 0;
}, ot = (e, t, n) => {
	let r = nt(t) ?? "", i = /* @__PURE__ */ new Map(), a = {
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
		let n = o.unique_id.slice(r.length + 1), s = Ye.get(o.translation_key ?? n);
		if (s !== void 0 && !P(e.config.version, s) || o.platform !== et || o.device_id !== t.id || o.hidden_by !== null || e.states[o.entity_id] === void 0 || !o.unique_id.startsWith(r)) continue;
		let c = it(n, o.translation_key);
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
	for (let [e, t] of a.gpu) t.name = at([...t.labels.values()]) ?? `GPU ${e}`;
	return {
		device: t,
		webClientUrl: t.configuration_url ? URL.parse(t.configuration_url)?.origin : void 0,
		single: i,
		items: a
	};
}, st, ct = (e) => (st?.entities !== e.entities && (st = {
	entities: e.entities,
	entries: e.connection.sendMessagePromise({ type: "config/entity_registry/list" })
}), st.entries), L = async (e, t) => ot(e, t, await ct(e)), R = (e, t) => {
	let n = e.filter((e) => e !== void 0);
	if (n.every((e) => e.type === "heading")) return;
	let r = {
		type: "grid",
		cards: n
	};
	return t && (r.column_span = t), r;
}, z = ({ single: e }, ...t) => t.flatMap((t) => e.get(t) ?? []), B = (e, ...t) => t.flatMap((t) => e?.fields.get(t) ?? []), V = ({ items: e }, t, n) => [...e[t].values()].flatMap((e) => B(e, n)), H = (e, t, n) => e.length > 0 ? We(e, t, n) : void 0, lt = (e) => e ? k(e) : void 0, U = (e, t) => e ? k(e, t) : void 0, ut = {
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
}, dt = (e) => e.map((e) => ut[e]), ft = (e, t) => ({
	...k(e, dt(t)),
	features_position: "inline"
}), W = (e, t, n, r) => n.flatMap((n) => {
	let i = e?.fields.get(n);
	if (!i) return [];
	let a = e?.labels.get(n), o = a?.startsWith(t) ? a.slice(t.length).trim() : "";
	return [k(i, r, o ? `${o.charAt(0).toUpperCase()}${o.slice(1)}` : void 0)];
}), pt = {
	storage: ({ entities: e, link: t }) => R([A("Storage", "mdi:harddisk", t), ...V(e, "mount", "space_used").map((e) => k(e))]),
	audio: ({ entities: e, audioFeatures: t, link: n }) => R([A("Audio", "mdi:volume-high", n), ...z(e, "audio").map((e) => ft(e, t))]),
	"now-playing": ({ entities: e, mediaFeatures: t, link: n }) => R([A("Now playing", "mdi:play-circle-outline", n), ...z(e, "media").map((e) => ft(e, t))]),
	"audio-outputs": ({ entities: e, audioFeatures: t }) => R([
		A("Outputs", "mdi:speaker"),
		...z(e, "audio").map((e) => ft(e, t)),
		...V(e, "audio_output", "audio_output").map((e) => k(e, dt(t.filter((e) => e !== "source"))))
	]),
	"audio-inputs": ({ entities: e, inputSource: t }) => R([
		A("Inputs", "mdi:microphone"),
		...z(e, "audio_input").map((e) => k(e, t ? [{ type: "select-options" }] : [])),
		...[...e.items.audio_input.values()].flatMap((e) => [...B(e, "volume").map((e) => k(e, [{
			type: "numeric-input",
			style: "slider"
		}])), ...B(e, "mute").map((e) => k(e))])
	]),
	"overview-load": ({ entities: e, hours: t, link: n }) => R([A("CPU and memory", "mdi:cpu-64-bit", n), H(z(e, "processes_load", "memory_used_percentage"), t)]),
	"overview-power": ({ entities: e, hours: t, link: n }) => {
		let r = z(e, "power_usage", "cpu_power_package");
		return R([
			A("Power", "mdi:flash", n),
			...r.map((e) => k(e)),
			H(r, t)
		]);
	},
	"overview-temperatures": ({ entities: e, hours: t, link: n }) => {
		let r = [...z(e, "cpu_temperature"), ...V(e, "gpu", "temperature")];
		return R([
			A("Temperatures", "mdi:thermometer", n),
			...r.map((e) => k(e)),
			H(r, t)
		]);
	},
	battery: ({ entities: e, percentage: t }) => R([
		A("Battery", "mdi:battery"),
		U(e.single.get("battery"), t),
		...z(e, "battery_state", "battery_time_remaining", "battery_is_charging", "ac_connected", "battery_power", "battery_voltage").map((e) => k(e))
	]),
	"device-batteries": ({ entities: e, percentage: t }) => R([A("Devices", "mdi:battery-bluetooth"), ...[...e.items.battery.values()].flatMap((e) => [...B(e, "battery_info").map((e) => k(e, t)), ...B(e, "state").map((e) => k(e))])]),
	cpu: ({ entities: e, percentage: t }) => R([
		A("Usage", "mdi:cpu-64-bit"),
		U(e.single.get("processes_load"), t),
		...z(e, "cpu_speed", "cpu_power_package", "load_average", "cpu_temperature", "cpu_voltage").map((e) => k(e))
	]),
	"cpu-history": ({ entities: e, hours: t }) => R([
		A("Usage over time"),
		H(z(e, "processes_load"), t, "Usage"),
		H(z(e, "cpu_speed"), t, "Frequency"),
		H(z(e, "cpu_power_package"), t, "Power"),
		H(z(e, "load_average", "load_average_5", "load_average_15"), t, "Load average"),
		H(z(e, "cpu_temperature"), t, "Temperature")
	], 2),
	"cpu-cores": ({ entities: e }) => R([
		A("Cores"),
		...V(e, "core", "processes_load_cpu").map((e) => k(e)),
		...V(e, "core", "cpu_power_core").map((e) => k(e))
	]),
	memory: ({ entities: e, percentage: t }) => R([
		A("In use", "mdi:memory"),
		U(e.single.get("memory_used_percentage"), t),
		...z(e, "memory_free", "memory_used").map((e) => k(e)),
		U(e.single.get("swap_used_percentage"), t),
		lt(e.single.get("swap_used"))
	]),
	"memory-history": ({ entities: e, hours: t }) => R([A("Usage over time"), H(z(e, "memory_used_percentage", "swap_used_percentage"), t)], 2),
	mount: ({ entities: e, item: t, percentage: n }) => {
		let r = t === void 0 ? void 0 : e.items.mount.get(t), i = r?.name ?? "";
		return R([A(i, "mdi:harddisk"), ...W(r, i, ["space_used"], n)]);
	},
	"disk-activity": ({ entities: e, hours: t }) => {
		let n = z(e, "disk_read_rate", "disk_write_rate");
		return R([
			A("Activity", "mdi:swap-vertical"),
			...n.map((e) => k(e)),
			H(n, t),
			H([...e.items.disk.values()].flatMap((e) => B(e, "read_rate", "write_rate")), t, "Per disk")
		]);
	},
	display: ({ entities: e, item: t }) => {
		let n = t === void 0 ? void 0 : e.items.display.get(t), r = `Display ${n?.name ?? ""}`;
		return R([
			A(r, "mdi:monitor"),
			...W(n, r, ["power"], [{ type: "toggle" }]),
			...W(n, r, ["brightness"], [{
				type: "numeric-input",
				style: "slider"
			}]),
			...W(n, r, [
				"resolution_x",
				"resolution_y",
				"refresh_rate"
			])
		]);
	},
	gpu: ({ entities: e, item: t, hours: n, percentage: r }) => {
		let i = t === void 0 ? void 0 : e.items.gpu.get(t), a = i?.name ?? "";
		return R([
			A(a, "mdi:expansion-card-variant"),
			...W(i, a, [
				"usage_percentage",
				"memory_used_percentage",
				"encoder_usage_percentage",
				"decoder_usage_percentage"
			], r),
			...W(i, a, [
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
			H(B(i, "usage_percentage", "memory_used_percentage", "encoder_usage_percentage", "decoder_usage_percentage"), n, "Load over time"),
			H(B(i, "power_usage", "temperature"), n, "Power and temperature")
		]);
	},
	network: ({ entities: e, hours: t, link: n }) => {
		let r = z(e, "network_download_rate", "network_upload_rate");
		return R([
			A("Network", "mdi:lan", n),
			...r.map((e) => k(e)),
			H(r, t)
		]);
	},
	interface: ({ entities: e, item: t, hours: n }) => {
		let r = t === void 0 ? void 0 : e.items.interface.get(t), i = r?.name ?? "";
		return R([
			A(i, "mdi:ethernet"),
			...W(r, i, [
				"download_rate",
				"upload_rate",
				"ssid",
				"signal_strength",
				"link_rate"
			]),
			H(B(r, "download_rate", "upload_rate"), n)
		]);
	},
	desktop: ({ entities: e, hours: t }) => R([
		A("Session", "mdi:account-clock-outline"),
		...z(e, "locked", "idle_time").map((e) => k(e)),
		H(z(e, "idle_time"), t)
	]),
	processes: ({ entities: e, hours: t }) => R([
		A("Processes", "mdi:application-cog-outline"),
		lt(e.single.get("processes_count")),
		H(z(e, "processes_count"), t)
	]),
	commands: ({ entities: e }) => R([A("Commands", "mdi:power"), ...z(e, "power_lock", "power_logout", "power_sleep", "power_hibernate", "power_restart", "power_shutdown").map((e) => k(e))]),
	power: ({ entities: e }) => R([
		A("Power", "mdi:lightning-bolt"),
		...z(e, "power_profile").map((e) => k(e, [{ type: "select-options" }])),
		...z(e, "keep_awake").map((e) => k(e, [{ type: "toggle" }]))
	]),
	system: ({ entities: e }) => R([A("Device", "mdi:information-outline"), ...z(e, "power_usage", "camera_in_use").map((e) => k(e))])
}, mt = (e) => Object.hasOwn(pt, e), G = (e, t, n, r, i, a = 2) => `<rect x="${e}" y="${t}" width="${n}" height="${r}" rx="${a}" fill="currentColor" fill-opacity="${i}"/>`, K = (e, t, n, r, i = 3) => `<rect x="${e}" y="${t}" width="${n}" height="${r}" rx="${i}" stroke="currentColor" stroke-opacity="0.48" stroke-width="2"/>`, q = (e, t, n, r) => `<circle cx="${e}" cy="${t}" r="${n}" fill="currentColor" fill-opacity="${r}"/>`, J = (e, t) => `<path d="${e}" stroke="currentColor" stroke-opacity="${t}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`, Y = (e, t) => `<path d="${e}" fill="currentColor" fill-opacity="${t}"/>`, X = (e, t) => Array.from({ length: e }, (e, n) => t(n)).join(""), ht = "M8 28 L22 24 L36 30 L50 14 L64 20 L78 10 L86 12", gt = {
	storage: G(8, 10, 78, 6, .12, 3) + G(8, 10, 52, 6, .4, 3) + G(8, 19, 78, 6, .12, 3) + G(8, 19, 30, 6, .4, 3) + G(8, 28, 78, 6, .12, 3) + G(8, 28, 64, 6, .4, 3),
	audio: Y("M14 17 L20 17 L28 10 L28 34 L20 27 L14 27 Z", .48) + G(36, 17, 50, 4, .12, 2) + G(36, 17, 34, 4, .4, 2) + G(36, 25, 30, 3, .24, 1.5),
	"now-playing": Y("M12 12 L12 32 L28 22 Z", .48) + G(36, 17, 50, 3, .12, 1.5) + G(36, 17, 28, 3, .4, 1.5) + G(36, 25, 30, 3, .24, 1.5),
	"audio-outputs": Y("M14 17 L20 17 L28 10 L28 34 L20 27 L14 27 Z", .48) + G(36, 15, 50, 4, .12, 2) + G(36, 15, 34, 4, .4, 2) + G(36, 25, 50, 4, .12, 2) + G(36, 25, 20, 4, .4, 2),
	"audio-inputs": G(17, 9, 10, 17, .48, 5) + J("M13 22 Q22 34 31 22 M22 30 L22 35", .48) + G(36, 15, 50, 4, .12, 2) + G(36, 15, 26, 4, .4, 2) + G(36, 25, 50, 4, .12, 2) + G(36, 25, 40, 4, .4, 2),
	"overview-load": J("M8 30 L22 24 L36 28 L50 16 L64 22 L78 12 L86 14", .72) + J("M8 34 L22 32 L36 33 L50 28 L64 30 L78 26 L86 27", .32),
	"overview-power": Y("M46 6 L34 24 L43 24 L40 38 L56 18 L46 18 Z", .48),
	"overview-temperatures": G(24, 8, 8, 22, .24, 4) + q(28, 32, 6, .48) + G(26, 14, 4, 18, .48, 2) + J("M46 32 L56 24 L66 28 L78 12", .72),
	battery: K(24, 11, 44, 22, 4) + G(70, 18, 4, 8, .48, 1) + G(28, 15, 26, 14, .48),
	"device-batteries": X(3, (e) => K(10 + e * 26, 14, 18, 12, 3) + G(29 + e * 26, 18, 2, 4, .48, 1) + G(13 + e * 26, 17, [
		12,
		6,
		9
	][e] ?? 8, 6, .48, 1)),
	cpu: K(34, 10, 26, 24, 4) + G(41, 17, 12, 10, .48) + X(3, (e) => G(39 + e * 8, 5, 2, 5, .32, 1)) + X(3, (e) => G(39 + e * 8, 34, 2, 5, .32, 1)),
	"cpu-history": Y(`${ht} L86 34 L8 34 Z`, .12) + J(ht, .72),
	"cpu-cores": X(8, (e) => G(8 + e % 4 * 20, 10 + Math.floor(e / 4) * 14, 18, 10, [
		.48,
		.24,
		.4,
		.12,
		.32,
		.48,
		.12,
		.24
	][e] ?? .24)),
	memory: K(8, 12, 78, 20, 3) + X(6, (e) => G(14 + e * 12, 18, 8, 8, e < 4 ? .48 : .12, 1)),
	"memory-history": J("M8 32 L24 32 L24 24 L40 24 L40 28 L58 28 L58 14 L72 14 L72 18 L86 18", .72),
	mount: G(8, 12, 78, 20, .12, 4) + G(14, 20, 40, 4, .32, 2) + q(76, 22, 3, .48),
	"disk-activity": X(11, (e) => {
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
		return G(10 + e * 7, 36 - t, 5, t, e % 2 == 0 ? .48 : .24, 1);
	}),
	display: K(24, 8, 46, 24, 3) + G(42, 32, 10, 3, .4) + G(36, 35, 22, 2, .4),
	gpu: K(12, 10, 70, 22, 3) + q(34, 21, 7, .32) + q(34, 21, 2.5, .48) + G(50, 16, 24, 3, .24, 1.5) + G(50, 23, 14, 3, .24, 1.5) + G(18, 32, 14, 3, .32),
	network: Y("M30 8 L40 20 L34 20 L34 34 L26 34 L26 20 L20 20 Z", .48) + Y("M64 36 L74 24 L68 24 L68 10 L60 10 L60 24 L54 24 Z", .32),
	interface: q(20, 22, 6, .48) + q(74, 22, 6, .48) + G(26, 21, 42, 2, .32, 1) + G(43, 14, 8, 16, .24, 2),
	desktop: G(36, 20, 22, 16, .48, 3) + "<path d=\"M41 20 V15 A6 6 0 0 1 53 15 V20\" stroke=\"currentColor\" stroke-opacity=\"0.48\" stroke-width=\"2\"/>",
	processes: X(4, (e) => G(8, 9 + e * 8, 6, 5, .4, 1) + G(18, 9 + e * 8, [
		60,
		44,
		52,
		30
	][e] ?? 40, 5, .24)),
	commands: X(3, (e) => G(10 + e * 26, 12, 22, 20, e === 0 ? .48 : .24, 4)),
	power: K(8, 10, 36, 24) + G(13, 26, 26, 4, .48, 2) + K(50, 10, 36, 24) + G(56, 18, 24, 8, .24, 4) + q(76, 22, 3, .48),
	system: "<circle cx=\"47\" cy=\"22\" r=\"13\" stroke=\"currentColor\" stroke-opacity=\"0.48\" stroke-width=\"2\"/>" + q(47, 15.5, 2, .48) + G(45, 20, 4, 11, .48, 1)
}, _t = (e, t) => {
	let n = t ? "white" : "black", r = `<svg width="94" height="44" viewBox="0 0 94 44" fill="none" color="${n}" xmlns="http://www.w3.org/2000/svg"><rect width="94" height="44" rx="8" fill="${t ? "#1C1C1C" : "white"}"/><rect x="0.5" y="0.5" width="93" height="43" rx="7.5" stroke="${n}" stroke-opacity="${t ? .24 : .12}"/>${gt[e]}</svg>`;
	return `data:image/svg+xml,${encodeURIComponent(r)}`;
}, vt = "custom:system-bridge", yt = [
	"none",
	"bar",
	"trend"
], bt = [
	"source",
	"playback",
	"volume_buttons",
	"volume_slider"
], xt = [
	"source",
	"volume_buttons",
	"volume_slider"
], St = ["source", "playback"], Ct = ["source", "volume_buttons"];
// \0@oxc-project+runtime@0.155.0/helpers/esm/decorate.js
function Z(e, t, n, r) {
	var i = arguments.length, a = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, o;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
	return i > 3 && a && Object.defineProperty(t, n, a), a;
}
// src/editor.ts
var wt = /* @__PURE__ */ new Map([
	["device_id", "Device"],
	["hours_to_show", "History"],
	["tile_feature", "Percentage tiles"],
	["page", "Page"],
	["section", "Section"],
	["item", "Item"],
	["show_icon_and_title", "Icon and title"],
	["show_top_links", "Web client link"],
	["pages_options", "Page options"],
	["pages", "Pages"],
	["icon_and_title_pages", "Icon and title"],
	["top_links_pages", "Web client link"],
	["media_options", "Media"],
	["media_features", "Media tile"],
	["audio_options", "Audio"],
	["audio_features", "Audio tiles"],
	["show_input_source", "Audio input picker"]
]), Tt = /* @__PURE__ */ new Map([
	["source", "Source"],
	["playback", "Playback"],
	["volume_buttons", "Volume buttons"],
	["volume_slider", "Volume slider"]
]), Et = (e) => ({ select: {
	multiple: !0,
	reorder: !0,
	mode: "dropdown",
	options: e.map((e) => ({
		value: e,
		label: Tt.get(e) ?? e
	}))
} }), Dt = /* @__PURE__ */ new Map([
	["none", "None"],
	["bar", "Bar"],
	["trend", "Trend"]
]), Ot = /* @__PURE__ */ new Map([
	["none", "Only the value"],
	["bar", "The percentage as a bar"],
	["trend", "Recent values as a graph"]
]), kt = /* @__PURE__ */ new Map([
	["none", () => ""],
	["bar", (e) => `<rect x="8" y="32" width="78" height="6" rx="3" fill="${e}" fill-opacity="0.24"/><rect x="8" y="32" width="46" height="6" rx="3" fill="${e}" fill-opacity="0.48"/>`],
	["trend", (e) => `<path d="M8 37 L20 33 L32 36 L46 30 L60 34 L72 29 L86 32" stroke="${e}" stroke-opacity="0.72" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`]
]), At = (e, t) => {
	let n = t ? "#1C1C1C" : "white", r = t ? "white" : "black", i = kt.get(e)?.(r) ?? "", a = `<svg width="94" height="44" viewBox="0 0 94 44" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="94" height="44" rx="8" fill="${n}"/><rect x="0.5" y="0.5" width="93" height="43" rx="7.5" stroke="${r}" stroke-opacity="${t ? .24 : .12}"/><circle cx="17" cy="15" r="7" fill="${r}" fill-opacity="${t ? .24 : .12}"/><rect x="30" y="9" width="30" height="3" rx="1.5" fill="${r}" fill-opacity="${t ? .72 : .48}"/><rect x="30" y="16" width="20" height="3" rx="1.5" fill="${r}" fill-opacity="${t ? .48 : .32}"/>${i}</svg>`;
	return `data:image/svg+xml,${encodeURIComponent(a)}`;
}, jt = {
	hours_to_show: 1,
	tile_feature: "bar",
	show_icon_and_title: !0,
	show_top_links: !0,
	show_input_source: !0,
	media_features: St,
	audio_features: Ct
}, Q = M.map(({ page: e }) => e), Mt = (e, t) => t === void 0 || e !== void 0 && P(e, t), Nt = (e) => new Set(Q.filter((t) => !Mt(e, $e.get(t)))), Pt = (e, t, n) => {
	let r = e.filter((e) => !n.has(e)), i;
	for (let e of t) n.has(e) && r.splice(i === void 0 ? 0 : r.indexOf(i) + 1, 0, e), r.includes(e) && (i = e);
	return r;
}, Ft = (e, t) => ({ select: {
	multiple: !0,
	reorder: e,
	mode: "dropdown",
	options: M.filter(({ page: e }) => t.includes(e)).map(({ page: e, title: t }) => ({
		value: e,
		label: t
	}))
} }), It = (e) => [{
	name: "pages_options",
	type: "expandable",
	flatten: !0,
	expanded: !0,
	schema: [
		{
			name: "pages",
			selector: Ft(!0, e)
		},
		{
			name: "icon_and_title_pages",
			selector: Ft(!1, e)
		},
		{
			name: "top_links_pages",
			selector: Ft(!1, e)
		}
	]
}], Lt = /* @__PURE__ */ new Map([["cpu", "CPU"], ["gpu", "GPU"]]), Rt = (e) => {
	let [t = "", ...n] = e.split("-").map((e) => Lt.get(e) ?? e);
	return [t.charAt(0).toUpperCase() + t.slice(1), ...n].join(" ");
}, zt = {
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
	interface: "One network interface: rates, Wi-Fi details and a graph. Set the item to the interface name.",
	desktop: "Whether the session is locked, and how long it's been idle.",
	processes: "The number of processes, with a graph.",
	commands: "Buttons to lock, log out, sleep, hibernate, restart or shut down.",
	power: "The power profile, and a switch to keep the device awake.",
	system: "Device power usage and whether the camera is in use."
}, Bt = /* @__PURE__ */ new Map([
	["device_id", "The System Bridge device to show."],
	["page", "The web client page this view shows."],
	["item", "For sections about one thing: its mount point, GPU, display or interface name."],
	["hours_to_show", "Hours that graphs go back."],
	["tile_feature", "Shown under percentages such as CPU and memory usage."],
	["show_icon_and_title", "Show the icon next to the title in the tab."],
	["show_top_links", "Show a link to the System Bridge web client at the top."],
	["pages", "In tab order. Drag to reorder, remove to hide."],
	["icon_and_title_pages", "Pages whose tab shows the icon next to the title."],
	["top_links_pages", "Pages with a link to the web client at the top."],
	["media_features", "Controls on the Media tile, in order. Drag to reorder, remove to hide."],
	["audio_features", "Controls on the Audio and output tiles, in order. Drag to reorder, remove to hide."],
	["show_input_source", "Choose the default audio input."]
]), Vt = /* @__PURE__ */ new Set([
	"overview-load",
	"overview-power",
	"overview-temperatures",
	"cpu-history",
	"memory-history",
	"disk-activity",
	"gpu",
	"network",
	"interface",
	"desktop",
	"processes"
]), Ht = /* @__PURE__ */ new Set([
	"battery",
	"device-batteries",
	"cpu",
	"memory",
	"mount",
	"gpu"
]), Ut = /* @__PURE__ */ new Map([
	["mount", "mount"],
	["gpu", "gpu"],
	["display", "display"],
	["interface", "interface"]
]), Wt = [
	"media_features",
	"audio_features",
	"show_input_source"
], Gt = /* @__PURE__ */ new Map([
	["audio", ["audio_features"]],
	["now-playing", ["media_features"]],
	["audio-outputs", ["audio_features"]],
	["audio-inputs", ["show_input_source"]]
]), Kt = /* @__PURE__ */ new Map([
	["overview", ["media_features", "audio_features"]],
	["media", ["media_features"]],
	["audio", ["audio_features", "show_input_source"]]
]), qt = [{
	name: "media_options",
	options: ["media_features"]
}, {
	name: "audio_options",
	options: ["audio_features", "show_input_source"]
}], Jt = (e) => "section" in e ? Gt.get(e.section) ?? [] : "page" in e ? Kt.get(e.page) ?? [] : Wt, Yt = (e, t) => [...Gt].some(([n, r]) => r.includes(e) && Mt(t, Ze.get(n))), Xt = (e, t) => {
	let n = Jt(e).filter((e) => Yt(e, t));
	return qt.flatMap(({ name: t, options: r }) => {
		let i = r.filter((e) => n.includes(e));
		return i.length > 0 ? [{
			name: t,
			type: "expandable",
			flatten: !0,
			expanded: "section" in e,
			schema: i.map((e) => ({
				name: e,
				selector: Zt(e)
			}))
		}] : [];
	});
}, Zt = (e) => {
	switch (e) {
		case "media_features": return Et(bt);
		case "audio_features": return Et(xt);
		case "show_input_source": return { boolean: {} };
	}
}, Qt = (e, t) => e.length === t.length && e.every((e, n) => e === t[n]), $t = (e, t, n) => [
	{
		name: "device_id",
		selector: { device: { integration: "system_bridge" } }
	},
	..."page" in e ? [{
		name: "page",
		required: !0,
		selector: { select: {
			mode: "dropdown",
			options: M.filter(({ page: t }) => t === e.page || Mt(n, $e.get(t))).map(({ page: e, title: t }) => ({
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
	..."section" in e ? [{
		name: "section",
		required: !0,
		selector: { select: {
			mode: "box",
			box_max_columns: 2,
			sort: !0,
			options: Object.entries(zt).flatMap(([t, r]) => mt(t) && (t === e.section || Mt(n, Ze.get(t))) ? [{
				value: t,
				label: Rt(t),
				description: r,
				image: {
					src: _t(t, !1),
					src_dark: _t(t, !0)
				}
			}] : [])
		} }
	}, ...Ut.has(e.section) ? [{
		name: "item",
		required: !0,
		selector: { select: {
			mode: "dropdown",
			sort: !0,
			options: t
		} }
	}] : []] : [],
	...!("section" in e) || Vt.has(e.section) ? [{
		name: "hours_to_show",
		selector: { number: {
			min: 1,
			max: 48,
			mode: "slider",
			slider_ticks: !0,
			unit_of_measurement: "h"
		} }
	}] : [],
	...!("section" in e) || Ht.has(e.section) ? [{
		name: "tile_feature",
		selector: { select: {
			mode: "box",
			box_max_columns: 3,
			options: yt.map((e) => ({
				value: e,
				label: Dt.get(e) ?? e,
				description: Ot.get(e),
				image: {
					src: At(e, !1),
					src_dark: At(e, !0)
				}
			}))
		} }
	}] : [],
	...Xt(e, n)
], en = (e) => !("page" in e) && !("section" in e), $ = class extends D {
	constructor(...e) {
		super(...e), this._computeLabel = (e) => wt.get(e.name) ?? e.name, this._computeHelper = (e) => Bt.get(e.name), this._generalChanged = (e) => {
			if (e.stopPropagation(), !this._config) return;
			let t = {
				...this._config,
				...e.detail.value
			};
			if (t.hours_to_show === 1 && delete t.hours_to_show, t.tile_feature === "bar" && delete t.tile_feature, "show_icon_and_title" in t && t.show_icon_and_title && delete t.show_icon_and_title, "show_top_links" in t && t.show_top_links && delete t.show_top_links, t.media_features && Qt(t.media_features, St) && delete t.media_features, t.audio_features && Qt(t.audio_features, Ct) && delete t.audio_features, t.show_input_source && delete t.show_input_source, en(t)) {
				let e = en(this._config) ? this._config : void 0, n = Nt(this.hass?.config.version);
				for (let r of [
					"pages",
					"icon_and_title_pages",
					"top_links_pages"
				]) {
					let i = t[r];
					i && (t[r] = Pt(i, e?.[r] ?? Q, n));
				}
				t.pages && Qt(t.pages, Q) && delete t.pages;
				let r = (e) => e && Qt([...e].sort(), [...Q].sort());
				r(t.icon_and_title_pages) && delete t.icon_and_title_pages, r(t.top_links_pages) && delete t.top_links_pages;
			}
			this._emit(t);
		};
	}
	setConfig(e) {
		this._config = e;
	}
	willUpdate() {
		let e = this.hass, t = this._config;
		if (!e || !t || !("section" in t)) return;
		let n = t.device_id ?? "";
		if (this._entitiesFor === n) return;
		this._entitiesFor = n;
		let r = I(e, t.device_id);
		"device" in r ? L(e, r.device).then((e) => {
			this._entitiesFor === n && (this._entities = e);
		}) : this._entities = void 0;
	}
	_itemOptions(e) {
		if (!("section" in e)) return [];
		let t = Ut.get(e.section), n = t ? [...this._entities?.items[t] ?? []].map(([e, t]) => ({
			value: e,
			label: t.name
		})) : [];
		return e.item && !n.some(({ value: t }) => t === e.item) && n.push({
			value: e.item,
			label: e.item
		}), n;
	}
	render() {
		if (!this._config) return C;
		let e = this._config, t = this.hass?.config.version, n = Nt(t), r = (e) => e.filter((e) => !n.has(e)), i = en(e) ? Ce`<ha-form
          .hass=${this.hass}
          .data=${{
			pages: r(e.pages ?? Q),
			icon_and_title_pages: r(e.icon_and_title_pages ?? Q),
			top_links_pages: r(e.top_links_pages ?? Q)
		}}
          .schema=${It(r(Q))}
          .computeLabel=${this._computeLabel}
          .computeHelper=${this._computeHelper}
          @value-changed=${this._generalChanged}
        ></ha-form>` : C;
		return Ce`
      <ha-form
        .hass=${this.hass}
        .data=${{
			...jt,
			...e
		}}
        .schema=${$t(e, this._itemOptions(e), t)}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._generalChanged}
      ></ha-form>
      ${i}
    `;
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
  `;
	}
};
Z([Be({ attribute: !1 })], $.prototype, "hass", void 0), Z([Ve()], $.prototype, "_config", void 0), Z([Ve()], $.prototype, "_entities", void 0), $ = Z([O("system-bridge-strategy-editor")], $);
// src/section-strategy.ts
var tn = ["entities", "devices"], nn = {
	release: `The System Bridge dashboard needs Home Assistant ${Je} or later.`,
	none: "No System Bridge devices found. Add the System Bridge integration first.",
	several: "There are several System Bridge devices. Choose one in the settings.",
	not_found: "The System Bridge device was not found. Choose another in the settings."
}, rn = (e) => nn[e.error], an = (e, { section: t, item: n, link: r }, i) => pt[t]({
	entities: e,
	item: n,
	link: r,
	hours: i.hours_to_show ?? 1,
	percentage: Ue(i.tile_feature ?? "bar"),
	mediaFeatures: i.media_features ?? St,
	audioFeatures: i.audio_features ?? Ct,
	inputSource: i.show_input_source ?? !0
}), on = (e) => ({
	type: "grid",
	cards: [{
		type: "markdown",
		content: e
	}]
}), sn = class extends m {
	static {
		this.registryDependencies = tn;
	}
	static async generate(e, t) {
		if (!mt(e.section)) return on(`Unknown System Bridge section "${e.section}".`);
		let n = I(t, e.device_id);
		return "error" in n ? on(rn(n)) : an(await L(t, n.device), {
			section: e.section,
			item: e.item,
			link: e.link
		}, e) ?? on("No System Bridge entities for this section.");
	}
	static getConfigElement() {
		return document.createElement("system-bridge-strategy-editor");
	}
	static getStubConfig(e) {
		if (!P(e.config.version, "2026.10")) return;
		let t = /* @__PURE__ */ new Map();
		for (let n of Object.values(e.entities)) n?.device_id && t.set(n.device_id, (t.get(n.device_id) ?? 0) + 1);
		let [n] = rt(e).sort((e, n) => (t.get(n.id) ?? 0) - (t.get(e.id) ?? 0));
		return n ? {
			type: vt,
			device_id: n.id,
			section: "overview-load"
		} : void 0;
	}
};
sn = Z([O("ll-strategy-section-system-bridge")], sn);
// src/view-strategy.ts
var cn = (e, t, n, r = /* @__PURE__ */ new Set()) => e.sections(t).filter((e) => an(t, e, n) !== void 0).map(({ link: e, ...i }) => {
	let a = {
		type: vt,
		device_id: t.device.id,
		...i
	};
	return e !== void 0 && r.has(e) && (a.link = e), n.hours_to_show !== void 0 && (a.hours_to_show = n.hours_to_show), n.tile_feature !== void 0 && (a.tile_feature = n.tile_feature), n.media_features !== void 0 && (a.media_features = n.media_features), n.audio_features !== void 0 && (a.audio_features = n.audio_features), n.show_input_source !== void 0 && (a.show_input_source = n.show_input_source), { strategy: a };
}), ln = (e, t, n, r) => ({
	type: "sections",
	title: e.title,
	path: e.page,
	icon: e.icon,
	show_icon_and_title: n.show_icon_and_title ?? !0,
	max_columns: 3,
	badges: [...n.show_top_links === !1 ? [] : Ge(t, e.page, e.title), ...e.diagnostics ? qe(t) : []],
	sections: cn(e, t, n, r)
}), un = class extends m {
	static {
		this.registryDependencies = tn;
	}
	static async generate(e, t) {
		let n = M.find(({ page: t }) => t === e.page);
		if (!n) return {
			title: "System Bridge",
			cards: [{
				type: "markdown",
				content: `Unknown System Bridge page "${e.page}".`
			}]
		};
		let r = I(t, e.device_id);
		return "error" in r ? {
			title: n.title,
			cards: [{
				type: "markdown",
				content: rn(r)
			}]
		} : ln(n, await L(t, r.device), e);
	}
	static getConfigElement() {
		return document.createElement("system-bridge-strategy-editor");
	}
};
un = Z([O("ll-strategy-view-system-bridge")], un);
// src/dashboard-strategy.ts
var dn = class extends m {
	static {
		this.registryDependencies = tn;
	}
	static async generate(e, t) {
		let n = I(t, e.device_id);
		if ("error" in n) return { views: [{
			title: "System Bridge",
			cards: [{
				type: "markdown",
				content: rn(n)
			}]
		}] };
		let r = await L(t, n.device), i = (e.pages ?? M.map(({ page: e }) => e)).flatMap((e) => M.filter(({ page: t }) => t === e)).filter((t) => cn(t, r, e).length > 0), a = new Set(i.map(({ page: e }) => e));
		return { views: i.map((t) => ln(t, r, {
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
dn = Z([O("ll-strategy-dashboard-system-bridge")], dn);
// src/index.ts
var fn = "https://system-bridge.timmo.dev/using/home-assistant/#dashboard", pn = [{
	strategyType: "dashboard",
	description: "Your computer's System Bridge data, laid out like the web client."
}, {
	strategyType: "section",
	description: "One part of a System Bridge page, such as a GPU or a disk."
}];
window.customStrategies ??= [];
for (let { strategyType: e, description: t } of pn) window.customStrategies.some((t) => t.type === "system-bridge" && t.strategyType === e) || window.customStrategies.push({
	type: "system-bridge",
	name: "System Bridge",
	description: t,
	documentationURL: fn,
	strategyType: e
});
