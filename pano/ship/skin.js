// Garden Gnome Software - Skin
// Pano2VR pro 4.5.3/10717
// Filename: simplex2.ggsk
// Generated Tue Apr 21 11:22:23 2015

function pano2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		this._controller=document.createElement('div');
		this._controller.ggId="controller";
		this._controller.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._controller.ggVisible=true;
		this._controller.className='ggskin ggskin_container';
		this._controller.ggType='container';
		this._controller.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-142 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-65 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -142px;';
		hs+='top:  -65px;';
		hs+='width: 286px;';
		hs+='height: 50px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._controller.setAttribute('style',hs);
		this._up=document.createElement('div');
		this._up.ggId="up";
		this._up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up.ggVisible=true;
		this._up.className='ggskin ggskin_svg';
		this._up.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 25px;';
		hs+='top:  -5px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._up.setAttribute('style',hs);
		this._up__img=document.createElement('img');
		this._up__img.className='ggskin ggskin_svg';
		this._up__img.setAttribute('src',basePath + 'images/up.png');
		this._up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._up__img['ondragstart']=function() { return false; };
		this._up.appendChild(this._up__img);
		this._up.onmouseover=function () {
			me._up__img.src=basePath + 'images/up__o.png';
		}
		this._up.onmouseout=function () {
			me._up__img.src=basePath + 'images/up.png';
			me.elementMouseDown['up']=false;
		}
		this._up.onmousedown=function () {
			me.elementMouseDown['up']=true;
		}
		this._up.onmouseup=function () {
			me.elementMouseDown['up']=false;
		}
		this._up.ontouchend=function () {
			me.elementMouseDown['up']=false;
		}
		this._controller.appendChild(this._up);
		this._down=document.createElement('div');
		this._down.ggId="down";
		this._down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._down.ggVisible=true;
		this._down.className='ggskin ggskin_svg';
		this._down.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 25px;';
		hs+='top:  25px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._down.setAttribute('style',hs);
		this._down__img=document.createElement('img');
		this._down__img.className='ggskin ggskin_svg';
		this._down__img.setAttribute('src',basePath + 'images/down.png');
		this._down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._down__img['ondragstart']=function() { return false; };
		this._down.appendChild(this._down__img);
		this._down.onmouseover=function () {
			me._down__img.src=basePath + 'images/down__o.png';
		}
		this._down.onmouseout=function () {
			me._down__img.src=basePath + 'images/down.png';
			me.elementMouseDown['down']=false;
		}
		this._down.onmousedown=function () {
			me.elementMouseDown['down']=true;
		}
		this._down.onmouseup=function () {
			me.elementMouseDown['down']=false;
		}
		this._down.ontouchend=function () {
			me.elementMouseDown['down']=false;
		}
		this._controller.appendChild(this._down);
		this._left=document.createElement('div');
		this._left.ggId="left";
		this._left.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._left.ggVisible=true;
		this._left.className='ggskin ggskin_svg';
		this._left.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._left.setAttribute('style',hs);
		this._left__img=document.createElement('img');
		this._left__img.className='ggskin ggskin_svg';
		this._left__img.setAttribute('src',basePath + 'images/left.png');
		this._left__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._left__img['ondragstart']=function() { return false; };
		this._left.appendChild(this._left__img);
		this._left.onmouseover=function () {
			me._left__img.src=basePath + 'images/left__o.png';
		}
		this._left.onmouseout=function () {
			me._left__img.src=basePath + 'images/left.png';
			me.elementMouseDown['left']=false;
		}
		this._left.onmousedown=function () {
			me.elementMouseDown['left']=true;
		}
		this._left.onmouseup=function () {
			me.elementMouseDown['left']=false;
		}
		this._left.ontouchend=function () {
			me.elementMouseDown['left']=false;
		}
		this._controller.appendChild(this._left);
		this._right=document.createElement('div');
		this._right.ggId="right";
		this._right.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._right.ggVisible=true;
		this._right.className='ggskin ggskin_svg';
		this._right.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 50px;';
		hs+='top:  11px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._right.setAttribute('style',hs);
		this._right__img=document.createElement('img');
		this._right__img.className='ggskin ggskin_svg';
		this._right__img.setAttribute('src',basePath + 'images/right.png');
		this._right__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._right__img['ondragstart']=function() { return false; };
		this._right.appendChild(this._right__img);
		this._right.onmouseover=function () {
			me._right__img.src=basePath + 'images/right__o.png';
		}
		this._right.onmouseout=function () {
			me._right__img.src=basePath + 'images/right.png';
			me.elementMouseDown['right']=false;
		}
		this._right.onmousedown=function () {
			me.elementMouseDown['right']=true;
		}
		this._right.onmouseup=function () {
			me.elementMouseDown['right']=false;
		}
		this._right.ontouchend=function () {
			me.elementMouseDown['right']=false;
		}
		this._controller.appendChild(this._right);
		this._zoomin=document.createElement('div');
		this._zoomin.ggId="zoomin";
		this._zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomin.ggVisible=true;
		this._zoomin.className='ggskin ggskin_svg';
		this._zoomin.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 90px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoomin.setAttribute('style',hs);
		this._zoomin__img=document.createElement('img');
		this._zoomin__img.className='ggskin ggskin_svg';
		this._zoomin__img.setAttribute('src',basePath + 'images/zoomin.png');
		this._zoomin__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._zoomin__img['ondragstart']=function() { return false; };
		this._zoomin.appendChild(this._zoomin__img);
		this._zoomin.onmouseover=function () {
			me._tt_zoomin.style[domTransition]='none';
			me._tt_zoomin.style.visibility='inherit';
			me._tt_zoomin.ggVisible=true;
			me._zoomin__img.src=basePath + 'images/zoomin__o.png';
		}
		this._zoomin.onmouseout=function () {
			me._tt_zoomin.style[domTransition]='none';
			me._tt_zoomin.style.visibility='hidden';
			me._tt_zoomin.ggVisible=false;
			me._zoomin__img.src=basePath + 'images/zoomin.png';
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.onmousedown=function () {
			me.elementMouseDown['zoomin']=true;
		}
		this._zoomin.onmouseup=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.ontouchend=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._tt_zoomin=document.createElement('div');
		this._tt_zoomin__text=document.createElement('div');
		this._tt_zoomin.className='ggskin ggskin_textdiv';
		this._tt_zoomin.ggTextDiv=this._tt_zoomin__text;
		this._tt_zoomin.ggId="tt_zoomin";
		this._tt_zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomin.ggVisible=false;
		this._tt_zoomin.className='ggskin ggskin_text';
		this._tt_zoomin.ggType='text';
		hs ='position:absolute;';
		hs+='left: -55px;';
		hs+='top:  36px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_zoomin.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomin__text.setAttribute('style',hs);
		this._tt_zoomin.ggTextDiv.innerHTML="Zoom In";
		this._tt_zoomin.appendChild(this._tt_zoomin__text);
		this._tt_zoomin_white=document.createElement('div');
		this._tt_zoomin_white__text=document.createElement('div');
		this._tt_zoomin_white.className='ggskin ggskin_textdiv';
		this._tt_zoomin_white.ggTextDiv=this._tt_zoomin_white__text;
		this._tt_zoomin_white.ggId="tt_zoomin_white";
		this._tt_zoomin_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomin_white.ggVisible=true;
		this._tt_zoomin_white.className='ggskin ggskin_text';
		this._tt_zoomin_white.ggType='text';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tt_zoomin_white.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomin_white__text.setAttribute('style',hs);
		this._tt_zoomin_white.ggTextDiv.innerHTML="Zoom In";
		this._tt_zoomin_white.appendChild(this._tt_zoomin_white__text);
		this._tt_zoomin.appendChild(this._tt_zoomin_white);
		this._zoomin.appendChild(this._tt_zoomin);
		this._controller.appendChild(this._zoomin);
		this._zoomout=document.createElement('div');
		this._zoomout.ggId="zoomout";
		this._zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomout.ggVisible=true;
		this._zoomout.className='ggskin ggskin_svg';
		this._zoomout.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 130px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoomout.setAttribute('style',hs);
		this._zoomout__img=document.createElement('img');
		this._zoomout__img.className='ggskin ggskin_svg';
		this._zoomout__img.setAttribute('src',basePath + 'images/zoomout.png');
		this._zoomout__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._zoomout__img['ondragstart']=function() { return false; };
		this._zoomout.appendChild(this._zoomout__img);
		this._zoomout.onmouseover=function () {
			me._tt_zoomout.style[domTransition]='none';
			me._tt_zoomout.style.visibility='inherit';
			me._tt_zoomout.ggVisible=true;
			me._zoomout__img.src=basePath + 'images/zoomout__o.png';
		}
		this._zoomout.onmouseout=function () {
			me._tt_zoomout.style[domTransition]='none';
			me._tt_zoomout.style.visibility='hidden';
			me._tt_zoomout.ggVisible=false;
			me._zoomout__img.src=basePath + 'images/zoomout.png';
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.onmousedown=function () {
			me.elementMouseDown['zoomout']=true;
		}
		this._zoomout.onmouseup=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.ontouchend=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._tt_zoomout=document.createElement('div');
		this._tt_zoomout__text=document.createElement('div');
		this._tt_zoomout.className='ggskin ggskin_textdiv';
		this._tt_zoomout.ggTextDiv=this._tt_zoomout__text;
		this._tt_zoomout.ggId="tt_zoomout";
		this._tt_zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomout.ggVisible=false;
		this._tt_zoomout.className='ggskin ggskin_text';
		this._tt_zoomout.ggType='text';
		hs ='position:absolute;';
		hs+='left: -55px;';
		hs+='top:  36px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_zoomout.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomout__text.setAttribute('style',hs);
		this._tt_zoomout.ggTextDiv.innerHTML="Zoom Out";
		this._tt_zoomout.appendChild(this._tt_zoomout__text);
		this._tt_zoomout_white=document.createElement('div');
		this._tt_zoomout_white__text=document.createElement('div');
		this._tt_zoomout_white.className='ggskin ggskin_textdiv';
		this._tt_zoomout_white.ggTextDiv=this._tt_zoomout_white__text;
		this._tt_zoomout_white.ggId="tt_zoomout_white";
		this._tt_zoomout_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomout_white.ggVisible=true;
		this._tt_zoomout_white.className='ggskin ggskin_text';
		this._tt_zoomout_white.ggType='text';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tt_zoomout_white.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomout_white__text.setAttribute('style',hs);
		this._tt_zoomout_white.ggTextDiv.innerHTML="Zoom Out";
		this._tt_zoomout_white.appendChild(this._tt_zoomout_white__text);
		this._tt_zoomout.appendChild(this._tt_zoomout_white);
		this._zoomout.appendChild(this._tt_zoomout);
		this._controller.appendChild(this._zoomout);
		this._autorotate=document.createElement('div');
		this._autorotate.ggId="autorotate";
		this._autorotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._autorotate.ggVisible=true;
		this._autorotate.className='ggskin ggskin_svg';
		this._autorotate.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 170px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._autorotate.setAttribute('style',hs);
		this._autorotate__img=document.createElement('img');
		this._autorotate__img.className='ggskin ggskin_svg';
		this._autorotate__img.setAttribute('src',basePath + 'images/autorotate.png');
		this._autorotate__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._autorotate__img['ondragstart']=function() { return false; };
		this._autorotate.appendChild(this._autorotate__img);
		this._autorotate.onclick=function () {
			me.player.toggleAutorotate();
		}
		this._autorotate.onmouseover=function () {
			me._tt_autorotate.style[domTransition]='none';
			me._tt_autorotate.style.visibility='inherit';
			me._tt_autorotate.ggVisible=true;
			me._autorotate__img.src=basePath + 'images/autorotate__o.png';
		}
		this._autorotate.onmouseout=function () {
			me._tt_autorotate.style[domTransition]='none';
			me._tt_autorotate.style.visibility='hidden';
			me._tt_autorotate.ggVisible=false;
			me._autorotate__img.src=basePath + 'images/autorotate.png';
		}
		this._tt_autorotate=document.createElement('div');
		this._tt_autorotate__text=document.createElement('div');
		this._tt_autorotate.className='ggskin ggskin_textdiv';
		this._tt_autorotate.ggTextDiv=this._tt_autorotate__text;
		this._tt_autorotate.ggId="tt_autorotate";
		this._tt_autorotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_autorotate.ggVisible=false;
		this._tt_autorotate.className='ggskin ggskin_text';
		this._tt_autorotate.ggType='text';
		hs ='position:absolute;';
		hs+='left: -65px;';
		hs+='top:  36px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_autorotate.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_autorotate__text.setAttribute('style',hs);
		this._tt_autorotate.ggTextDiv.innerHTML="Start\/Stop Autorotation";
		this._tt_autorotate.appendChild(this._tt_autorotate__text);
		this._tt_autorotate_white=document.createElement('div');
		this._tt_autorotate_white__text=document.createElement('div');
		this._tt_autorotate_white.className='ggskin ggskin_textdiv';
		this._tt_autorotate_white.ggTextDiv=this._tt_autorotate_white__text;
		this._tt_autorotate_white.ggId="tt_autorotate_white";
		this._tt_autorotate_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_autorotate_white.ggVisible=true;
		this._tt_autorotate_white.className='ggskin ggskin_text';
		this._tt_autorotate_white.ggType='text';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tt_autorotate_white.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_autorotate_white__text.setAttribute('style',hs);
		this._tt_autorotate_white.ggTextDiv.innerHTML="Start\/Stop Autorotation";
		this._tt_autorotate_white.appendChild(this._tt_autorotate_white__text);
		this._tt_autorotate.appendChild(this._tt_autorotate_white);
		this._autorotate.appendChild(this._tt_autorotate);
		this._controller.appendChild(this._autorotate);
		this._movemode=document.createElement('div');
		this._movemode.ggId="movemode";
		this._movemode.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._movemode.ggVisible=true;
		this._movemode.className='ggskin ggskin_svg';
		this._movemode.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 210px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._movemode.setAttribute('style',hs);
		this._movemode__img=document.createElement('img');
		this._movemode__img.className='ggskin ggskin_svg';
		this._movemode__img.setAttribute('src',basePath + 'images/movemode.png');
		this._movemode__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._movemode__img['ondragstart']=function() { return false; };
		this._movemode.appendChild(this._movemode__img);
		this._movemode.onclick=function () {
			me.player.changeViewMode(2);
		}
		this._movemode.onmouseover=function () {
			me._tt_movemode.style[domTransition]='none';
			me._tt_movemode.style.visibility='inherit';
			me._tt_movemode.ggVisible=true;
			me._movemode__img.src=basePath + 'images/movemode__o.png';
		}
		this._movemode.onmouseout=function () {
			me._tt_movemode.style[domTransition]='none';
			me._tt_movemode.style.visibility='hidden';
			me._tt_movemode.ggVisible=false;
			me._movemode__img.src=basePath + 'images/movemode.png';
		}
		this._tt_movemode=document.createElement('div');
		this._tt_movemode__text=document.createElement('div');
		this._tt_movemode.className='ggskin ggskin_textdiv';
		this._tt_movemode.ggTextDiv=this._tt_movemode__text;
		this._tt_movemode.ggId="tt_movemode";
		this._tt_movemode.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_movemode.ggVisible=false;
		this._tt_movemode.className='ggskin ggskin_text';
		this._tt_movemode.ggType='text';
		hs ='position:absolute;';
		hs+='left: -65px;';
		hs+='top:  36px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_movemode.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_movemode__text.setAttribute('style',hs);
		this._tt_movemode.ggTextDiv.innerHTML="Change Control Mode";
		this._tt_movemode.appendChild(this._tt_movemode__text);
		this._tt_movemode_white=document.createElement('div');
		this._tt_movemode_white__text=document.createElement('div');
		this._tt_movemode_white.className='ggskin ggskin_textdiv';
		this._tt_movemode_white.ggTextDiv=this._tt_movemode_white__text;
		this._tt_movemode_white.ggId="tt_movemode_white";
		this._tt_movemode_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_movemode_white.ggVisible=true;
		this._tt_movemode_white.className='ggskin ggskin_text';
		this._tt_movemode_white.ggType='text';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tt_movemode_white.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_movemode_white__text.setAttribute('style',hs);
		this._tt_movemode_white.ggTextDiv.innerHTML="Change Control Mode";
		this._tt_movemode_white.appendChild(this._tt_movemode_white__text);
		this._tt_movemode.appendChild(this._tt_movemode_white);
		this._movemode.appendChild(this._tt_movemode);
		this._controller.appendChild(this._movemode);
		this._fullscreen=document.createElement('div');
		this._fullscreen.ggId="fullscreen";
		this._fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen.ggVisible=true;
		this._fullscreen.className='ggskin ggskin_svg';
		this._fullscreen.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 250px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._fullscreen.setAttribute('style',hs);
		this._fullscreen__img=document.createElement('img');
		this._fullscreen__img.className='ggskin ggskin_svg';
		this._fullscreen__img.setAttribute('src',basePath + 'images/fullscreen.png');
		this._fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._fullscreen__img['ondragstart']=function() { return false; };
		this._fullscreen.appendChild(this._fullscreen__img);
		this._fullscreen.onclick=function () {
			me.player.toggleFullscreen();
		}
		this._fullscreen.onmouseover=function () {
			me._tt_fullscreen.style[domTransition]='none';
			me._tt_fullscreen.style.visibility='inherit';
			me._tt_fullscreen.ggVisible=true;
			me._fullscreen__img.src=basePath + 'images/fullscreen__o.png';
		}
		this._fullscreen.onmouseout=function () {
			me._tt_fullscreen.style[domTransition]='none';
			me._tt_fullscreen.style.visibility='hidden';
			me._tt_fullscreen.ggVisible=false;
			me._fullscreen__img.src=basePath + 'images/fullscreen.png';
		}
		this._tt_fullscreen=document.createElement('div');
		this._tt_fullscreen__text=document.createElement('div');
		this._tt_fullscreen.className='ggskin ggskin_textdiv';
		this._tt_fullscreen.ggTextDiv=this._tt_fullscreen__text;
		this._tt_fullscreen.ggId="tt_fullscreen";
		this._tt_fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen.ggVisible=false;
		this._tt_fullscreen.className='ggskin ggskin_text';
		this._tt_fullscreen.ggType='text';
		hs ='position:absolute;';
		hs+='left: -55px;';
		hs+='top:  36px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_fullscreen.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen__text.setAttribute('style',hs);
		this._tt_fullscreen.ggTextDiv.innerHTML="Fullscreen";
		this._tt_fullscreen.appendChild(this._tt_fullscreen__text);
		this._tt_fullscreen_white=document.createElement('div');
		this._tt_fullscreen_white__text=document.createElement('div');
		this._tt_fullscreen_white.className='ggskin ggskin_textdiv';
		this._tt_fullscreen_white.ggTextDiv=this._tt_fullscreen_white__text;
		this._tt_fullscreen_white.ggId="tt_fullscreen_white";
		this._tt_fullscreen_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen_white.ggVisible=true;
		this._tt_fullscreen_white.className='ggskin ggskin_text';
		this._tt_fullscreen_white.ggType='text';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tt_fullscreen_white.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen_white__text.setAttribute('style',hs);
		this._tt_fullscreen_white.ggTextDiv.innerHTML="Fullscreen";
		this._tt_fullscreen_white.appendChild(this._tt_fullscreen_white__text);
		this._tt_fullscreen.appendChild(this._tt_fullscreen_white);
		this._fullscreen.appendChild(this._tt_fullscreen);
		this._controller.appendChild(this._fullscreen);
		this.divSkin.appendChild(this._controller);
		this._loading=document.createElement('div');
		this._loading.ggId="loading";
		this._loading.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading.ggVisible=true;
		this._loading.className='ggskin ggskin_container';
		this._loading.ggType='container';
		this._loading.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-105 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-30 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -105px;';
		hs+='top:  -30px;';
		hs+='width: 210px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._loading.setAttribute('style',hs);
		this._loading.onclick=function () {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this._loadingbg=document.createElement('div');
		this._loadingbg.ggId="loadingbg";
		this._loadingbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbg.ggVisible=true;
		this._loadingbg.className='ggskin ggskin_rectangle';
		this._loadingbg.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 210px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='background: #000000;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._loadingbg.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbg);
		this._loadingbrd=document.createElement('div');
		this._loadingbrd.ggId="loadingbrd";
		this._loadingbrd.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbrd.ggVisible=true;
		this._loadingbrd.className='ggskin ggskin_rectangle';
		this._loadingbrd.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 208px;';
		hs+='height: 58px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._loadingbrd.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbrd);
		this._loadingtext=document.createElement('div');
		this._loadingtext__text=document.createElement('div');
		this._loadingtext.className='ggskin ggskin_textdiv';
		this._loadingtext.ggTextDiv=this._loadingtext__text;
		this._loadingtext.ggId="loadingtext";
		this._loadingtext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingtext.ggVisible=true;
		this._loadingtext.className='ggskin ggskin_text';
		this._loadingtext.ggType='text';
		this._loadingtext.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=Math.floor(0 + (176-this.ggTextDiv.offsetWidth)*0) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 16px;';
		hs+='top:  12px;';
		hs+='width: 176px;';
		hs+='height: 23px;';
		hs+=cssPrefix + 'transform-origin: 0% 50%;';
		hs+='visibility: inherit;';
		this._loadingtext.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._loadingtext__text.setAttribute('style',hs);
		this._loadingtext.ggUpdateText=function() {
			var hs="Loading... "+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		this.ggUpdatePosition();
		}
		this._loadingtext.ggUpdateText();
		this._loadingtext.appendChild(this._loadingtext__text);
		this._loading.appendChild(this._loadingtext);
		this._loadingbar=document.createElement('div');
		this._loadingbar.ggId="loadingbar";
		this._loadingbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbar.ggVisible=true;
		this._loadingbar.className='ggskin ggskin_rectangle';
		this._loadingbar.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 15px;';
		hs+='top:  35px;';
		hs+='width: 181px;';
		hs+='height: 12px;';
		hs+=cssPrefix + 'transform-origin: 0% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #808080;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		this._loadingbar.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbar);
		this.divSkin.appendChild(this._loading);
		this._userdata=document.createElement('div');
		this._userdata.ggId="userdata";
		this._userdata.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdata.ggVisible=false;
		this._userdata.className='ggskin ggskin_container';
		this._userdata.ggType='container';
		this._userdata.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-120 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-80 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -120px;';
		hs+='top:  -80px;';
		hs+='width: 240px;';
		hs+='height: 140px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._userdata.setAttribute('style',hs);
		this._userdata.onclick=function () {
			me._userdata.style[domTransition]='none';
			me._userdata.style.visibility='hidden';
			me._userdata.ggVisible=false;
		}
		this._userdatabg=document.createElement('div');
		this._userdatabg.ggId="userdatabg";
		this._userdatabg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdatabg.ggVisible=true;
		this._userdatabg.className='ggskin ggskin_rectangle';
		this._userdatabg.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 240px;';
		hs+='height: 140px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='background: #000000;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._userdatabg.setAttribute('style',hs);
		this._userdata.appendChild(this._userdatabg);
		this._userdatabrd=document.createElement('div');
		this._userdatabrd.ggId="userdatabrd";
		this._userdatabrd.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdatabrd.ggVisible=true;
		this._userdatabrd.className='ggskin ggskin_rectangle';
		this._userdatabrd.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 238px;';
		hs+='height: 138px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._userdatabrd.setAttribute('style',hs);
		this._userdata.appendChild(this._userdatabrd);
		this._title=document.createElement('div');
		this._title__text=document.createElement('div');
		this._title.className='ggskin ggskin_textdiv';
		this._title.ggTextDiv=this._title__text;
		this._title.ggId="title";
		this._title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._title.ggVisible=true;
		this._title.className='ggskin ggskin_text';
		this._title.ggType='text';
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  10px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._title.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._title__text.setAttribute('style',hs);
		this._title.ggUpdateText=function() {
			var hs="<b>"+me.player.userdata.title+"<\/b>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		}
		this._title.ggUpdateText();
		this._title.appendChild(this._title__text);
		this._userdata.appendChild(this._title);
		this._description=document.createElement('div');
		this._description__text=document.createElement('div');
		this._description.className='ggskin ggskin_textdiv';
		this._description.ggTextDiv=this._description__text;
		this._description.ggId="description";
		this._description.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._description.ggVisible=true;
		this._description.className='ggskin ggskin_text';
		this._description.ggType='text';
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  30px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._description.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._description__text.setAttribute('style',hs);
		this._description.ggUpdateText=function() {
			var hs=me.player.userdata.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		}
		this._description.ggUpdateText();
		this._description.appendChild(this._description__text);
		this._userdata.appendChild(this._description);
		this._author=document.createElement('div');
		this._author__text=document.createElement('div');
		this._author.className='ggskin ggskin_textdiv';
		this._author.ggTextDiv=this._author__text;
		this._author.ggId="author";
		this._author.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._author.ggVisible=true;
		this._author.className='ggskin ggskin_text';
		this._author.ggType='text';
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  50px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._author.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._author__text.setAttribute('style',hs);
		this._author.ggUpdateText=function() {
			var hs=me.player.userdata.author;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		}
		this._author.ggUpdateText();
		this._author.appendChild(this._author__text);
		this._userdata.appendChild(this._author);
		this._datetime=document.createElement('div');
		this._datetime__text=document.createElement('div');
		this._datetime.className='ggskin ggskin_textdiv';
		this._datetime.ggTextDiv=this._datetime__text;
		this._datetime.ggId="datetime";
		this._datetime.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._datetime.ggVisible=true;
		this._datetime.className='ggskin ggskin_text';
		this._datetime.ggType='text';
		this._datetime.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=Math.floor(0 + (218-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  70px;';
		hs+='width: 218px;';
		hs+='height: 23px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._datetime.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._datetime__text.setAttribute('style',hs);
		this._datetime.ggUpdateText=function() {
			var hs=me.player.userdata.datetime;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		this.ggUpdatePosition();
		}
		this._datetime.ggUpdateText();
		this._datetime.appendChild(this._datetime__text);
		this._userdata.appendChild(this._datetime);
		this._copyright=document.createElement('div');
		this._copyright__text=document.createElement('div');
		this._copyright.className='ggskin ggskin_textdiv';
		this._copyright.ggTextDiv=this._copyright__text;
		this._copyright.ggId="copyright";
		this._copyright.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._copyright.ggVisible=true;
		this._copyright.className='ggskin ggskin_text';
		this._copyright.ggType='text';
		this._copyright.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=Math.floor(0 + (218-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  110px;';
		hs+='width: 218px;';
		hs+='height: 23px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._copyright.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._copyright__text.setAttribute('style',hs);
		this._copyright.ggUpdateText=function() {
			var hs="&#169; "+me.player.userdata.copyright;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		this.ggUpdatePosition();
		}
		this._copyright.ggUpdateText();
		this._copyright.appendChild(this._copyright__text);
		this._userdata.appendChild(this._copyright);
		this.divSkin.appendChild(this._userdata);
		this._hide_template=document.createElement('div');
		this._hide_template.ggId="hide_template";
		this._hide_template.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hide_template.ggVisible=false;
		this._hide_template.className='ggskin ggskin_container';
		this._hide_template.ggType='container';
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  10px;';
		hs+='width: 187px;';
		hs+='height: 45px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='overflow: hidden;';
		this._hide_template.setAttribute('style',hs);
		this._markertemplate=document.createElement('div');
		this._markertemplate.ggId="markertemplate";
		this._markertemplate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._markertemplate.ggVisible=true;
		this._markertemplate.className='ggskin ggskin_mark';
		this._markertemplate.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 60px;';
		hs+='top:  0px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._markertemplate.setAttribute('style',hs);
		this._markertemplate.ggMarkerNodeId='';
		nodeMarker.push(this._markertemplate);
		this._markertemplate.onmouseover=function () {
			me._marker_title.style[domTransition]='none';
			me._marker_title.style.visibility='inherit';
			me._marker_title.ggVisible=true;
		}
		this._markertemplate.onmouseout=function () {
			me._marker_title.style[domTransition]='none';
			me._marker_title.style.visibility='hidden';
			me._marker_title.ggVisible=false;
		}
		this._marker_title=document.createElement('div');
		this._marker_title__text=document.createElement('div');
		this._marker_title.className='ggskin ggskin_textdiv';
		this._marker_title.ggTextDiv=this._marker_title__text;
		this._marker_title.ggId="marker_title";
		this._marker_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title.ggVisible=false;
		this._marker_title.className='ggskin ggskin_text';
		this._marker_title.ggType='text';
		this._marker_title.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=Math.floor(0 + (149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -60px;';
		hs+='top:  35px;';
		hs+='width: 145px;';
		hs+='height: 17px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._marker_title.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title__text.setAttribute('style',hs);
		this._marker_title.ggUpdateText=function() {
			var hs=me.player.userdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		this.ggUpdatePosition();
		}
		this._marker_title.ggUpdateText();
		this._marker_title.appendChild(this._marker_title__text);
		this._markertemplate.appendChild(this._marker_title);
		this._hide_template.appendChild(this._markertemplate);
		this._marker_active=document.createElement('div');
		this._marker_active.ggId="marker_active";
		this._marker_active.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_active.ggVisible=true;
		this._marker_active.className='ggskin ggskin_svg';
		this._marker_active.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 105px;';
		hs+='top:  0px;';
		hs+='width: 31px;';
		hs+='height: 31px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_active.setAttribute('style',hs);
		this._marker_active__img=document.createElement('img');
		this._marker_active__img.className='ggskin ggskin_svg';
		this._marker_active__img.setAttribute('src',basePath + 'images/marker_active.png');
		this._marker_active__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 31px;height: 31px;-webkit-user-drag:none;');
		this._marker_active__img['ondragstart']=function() { return false; };
		this._marker_active.appendChild(this._marker_active__img);
		this._hide_template.appendChild(this._marker_active);
		this._marker_normal=document.createElement('div');
		this._marker_normal.ggId="marker_normal";
		this._marker_normal.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_normal.ggVisible=true;
		this._marker_normal.className='ggskin ggskin_svg';
		this._marker_normal.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 140px;';
		hs+='top:  0px;';
		hs+='width: 31px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_normal.setAttribute('style',hs);
		this._marker_normal__img=document.createElement('img');
		this._marker_normal__img.className='ggskin ggskin_svg';
		this._marker_normal__img.setAttribute('src',basePath + 'images/marker_normal.png');
		this._marker_normal__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 31px;height: 32px;-webkit-user-drag:none;');
		this._marker_normal__img['ondragstart']=function() { return false; };
		this._marker_normal.appendChild(this._marker_normal__img);
		this._hide_template.appendChild(this._marker_normal);
		this.divSkin.appendChild(this._hide_template);
		this._wheel=document.createElement('div');
		this._wheel__text=document.createElement('div');
		this._wheel.className='ggskin ggskin_textdiv';
		this._wheel.ggTextDiv=this._wheel__text;
		this._wheel.ggId="Wheel";
		this._wheel.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._wheel.ggVisible=false;
		this._wheel.className='ggskin ggskin_text';
		this._wheel.ggType='text';
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  78px;';
		hs+='width: 293px;';
		hs+='height: 159px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._wheel.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 293px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #484848;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		this._wheel__text.setAttribute('style',hs);
		this._wheel.ggTextDiv.innerHTML="<b>Wheel Room<\/b><br>In this area, deep inside the ship's hull, you can see a part of the mechanism used to steer the ship.<p><b>Stafell y llyw<\/b><br>Yn yr ardal hyn, yn ddwfn yng nghorff y llong, gallwch weld rhan o\u2019r fecanwaith a ddefnyddiwyd i lywio\u2019r llong.<\/p>";
		this._wheel.appendChild(this._wheel__text);
		this._wheel.onclick=function () {
			flag=(me._wheel.style.visibility=='hidden');
			me._wheel.style[domTransition]='none';
			me._wheel.style.visibility=flag?'inherit':'hidden';
			me._wheel.ggVisible=flag;
		}
		this.divSkin.appendChild(this._wheel);
		this._food=document.createElement('div');
		this._food__text=document.createElement('div');
		this._food.className='ggskin ggskin_textdiv';
		this._food.ggTextDiv=this._food__text;
		this._food.ggId="Food";
		this._food.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._food.ggVisible=false;
		this._food.className='ggskin ggskin_text';
		this._food.ggType='text';
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  78px;';
		hs+='width: 293px;';
		hs+='height: 159px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._food.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 293px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #484848;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		this._food__text.setAttribute('style',hs);
		this._food.ggTextDiv.innerHTML="<b>Food at Sea<\/b><br>Food was divided in to \"wet\" and \"dry\" provisions. Wet provisions included salt beef, pork, suet (beef fat), lime juice and rum. Dry provisions included things like biscuits, beans, peas, flour, rice, sugar, preserved meat and chocolate. Food was carefully stored in casks and drums in holds deep in the ship, making sure the older provisions were on top so everything would be used up in order of freshness. <p><b>Bwyd ar y m\xf4r<\/b><br>Rhannwyd bwyd mewn i ddarpariaeth \u2018gwlyb\u2019 a \u2018sych\u2019. Roedd darpariaeth gwlyb yn cynnwys cig eidion wedi ei halltu, porc, suet, sudd leim a rym. Roedd darpariaeth sych yn cynnwys bwydydd fel bisgedi, ffa, pys, blawd, reis, siwgr, cig cadw a siocled. Storiwyd y bwyd yn ofalus mewn casgenni a drymiau mewn howldiau yn ddwfn yng nghrombil y llong, gan sicrhau fod y bwydydd hynaf ar ben fel bod popeth yn cael eu defnyddio yn nhrefn eu ffresni.<\/p>";
		this._food.appendChild(this._food__text);
		this._food.onclick=function () {
			flag=(me._food.style.visibility=='hidden');
			me._food.style[domTransition]='none';
			me._food.style.visibility=flag?'inherit':'hidden';
			me._food.ggVisible=flag;
		}
		this.divSkin.appendChild(this._food);
		this._galley=document.createElement('div');
		this._galley__text=document.createElement('div');
		this._galley.className='ggskin ggskin_textdiv';
		this._galley.ggTextDiv=this._galley__text;
		this._galley.ggId="Galley";
		this._galley.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._galley.ggVisible=false;
		this._galley.className='ggskin ggskin_text';
		this._galley.ggType='text';
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  78px;';
		hs+='width: 293px;';
		hs+='height: 159px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._galley.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 293px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #484848;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		this._galley__text.setAttribute('style',hs);
		this._galley.ggTextDiv.innerHTML="<b>Galley<\/b><br>This is the ship's galley (kitchen) aboard the World War One warship, HMS Caroline. From this small space over 300 sailors would have been fed.<p><b>Cegin<\/b><br>Dyma cegin y llong ar long rhyfel y Rhyfel Byd Cyntaf, HMS Caroline. O\u2019r stafell fach hon byddai dros 300 o forwyr wedi cael eu bwydo.<\/p>";
		this._galley.appendChild(this._galley__text);
		this._galley.onclick=function () {
			flag=(me._galley.style.visibility=='hidden');
			me._galley.style[domTransition]='none';
			me._galley.style.visibility=flag?'inherit':'hidden';
			me._galley.ggVisible=flag;
		}
		this.divSkin.appendChild(this._galley);
		this._telegraph=document.createElement('div');
		this._telegraph__text=document.createElement('div');
		this._telegraph.className='ggskin ggskin_textdiv';
		this._telegraph.ggTextDiv=this._telegraph__text;
		this._telegraph.ggId="Telegraph";
		this._telegraph.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._telegraph.ggVisible=false;
		this._telegraph.className='ggskin ggskin_text';
		this._telegraph.ggType='text';
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  78px;';
		hs+='width: 293px;';
		hs+='height: 159px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._telegraph.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 293px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #484848;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		this._telegraph__text.setAttribute('style',hs);
		this._telegraph.ggTextDiv.innerHTML="<b>Telegraph<\/b><br>This telegraph allows the officers to send messages from the ship's bridge down to the crew in the tiller room to instruct them to adjust the ship's course. <p><b>Telegraff<\/b><br>Roedd y telegraff hwn yn caniat\xe1u i swyddogion hala negeseuon o bont y llong lawr i\u2019r criw yn stafell y llyw gyda chyfarwyddiadau am gwrs y llong.<\/p>";
		this._telegraph.appendChild(this._telegraph__text);
		this._telegraph.onclick=function () {
			flag=(me._telegraph.style.visibility=='hidden');
			me._telegraph.style[domTransition]='none';
			me._telegraph.style.visibility=flag?'inherit':'hidden';
			me._telegraph.ggVisible=flag;
		}
		this.divSkin.appendChild(this._telegraph);
		this._corridor=document.createElement('div');
		this._corridor__text=document.createElement('div');
		this._corridor.className='ggskin ggskin_textdiv';
		this._corridor.ggTextDiv=this._corridor__text;
		this._corridor.ggId="Corridor";
		this._corridor.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._corridor.ggVisible=false;
		this._corridor.className='ggskin ggskin_text';
		this._corridor.ggType='text';
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  78px;';
		hs+='width: 293px;';
		hs+='height: 159px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._corridor.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 293px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #484848;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		this._corridor__text.setAttribute('style',hs);
		this._corridor.ggTextDiv.innerHTML="<b>Corridor<\/b><br>Here you can see how sailors moved around the ship. Narrow corridors connected cabins and spaces together and metal ladders led down to other decks and storage areas. The water-tight hatches would be closed in an emergency. <p><b>Coridor<\/b><br>Yma gallwch weld sut byddai morwyr wedi symud o gwmpas y llong. Roedd coridorau cul yn cysylltu cabanau a stafelloedd gyda\u2019i gilydd ac roedd ysgolion metel yn arwain lawr i ddeciau eraill a mannau\u2019r storfeydd. Byddai\u2019r hatshus dwrglos yn cael eu cau mewn argyfwng.<\/p>";
		this._corridor.appendChild(this._corridor__text);
		this._corridor.onclick=function () {
			flag=(me._corridor.style.visibility=='hidden');
			me._corridor.style[domTransition]='none';
			me._corridor.style.visibility=flag?'inherit':'hidden';
			me._corridor.ggVisible=flag;
		}
		this.divSkin.appendChild(this._corridor);
		this._livingquarters=document.createElement('div');
		this._livingquarters__text=document.createElement('div');
		this._livingquarters.className='ggskin ggskin_textdiv';
		this._livingquarters.ggTextDiv=this._livingquarters__text;
		this._livingquarters.ggId="LivingQuarters";
		this._livingquarters.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._livingquarters.ggVisible=false;
		this._livingquarters.className='ggskin ggskin_text';
		this._livingquarters.ggType='text';
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  78px;';
		hs+='width: 293px;';
		hs+='height: 159px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._livingquarters.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 293px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #484848;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		this._livingquarters__text.setAttribute('style',hs);
		this._livingquarters.ggTextDiv.innerHTML="<b>Living quarters on a ship<\/b><br> Most sailors on a ship would sleep in hammocks hung from metal rings in the ceiling. Officers slept separately but most still in hammocks. Only the captain and the highest ranking officers had cabins of their own.<p><b>Stafelloedd byw ar long<\/b><br>Byddai\u2019r rhan fwyaf o forwyr ar long wedi cysgu mewn gwely crog a fyddai wedi cael eu hongian o\u2019r nenfwd. Roedd swyddogion yn cysgu ar wah\xe2n ond y rhan fwyaf o hyd mewn gwelyau crog. Dim ond y capten a\u2019r swyddogion uwch fyddai wedi berchen ar gabanau eu hunain.<\/p>";
		this._livingquarters.appendChild(this._livingquarters__text);
		this._livingquarters.onclick=function () {
			flag=(me._livingquarters.style.visibility=='hidden');
			me._livingquarters.style[domTransition]='none';
			me._livingquarters.style.visibility=flag?'inherit':'hidden';
			me._livingquarters.ggVisible=flag;
		}
		this.divSkin.appendChild(this._livingquarters);
		this._crew=document.createElement('div');
		this._crew__text=document.createElement('div');
		this._crew.className='ggskin ggskin_textdiv';
		this._crew.ggTextDiv=this._crew__text;
		this._crew.ggId="Crew";
		this._crew.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._crew.ggVisible=false;
		this._crew.className='ggskin ggskin_text';
		this._crew.ggType='text';
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  78px;';
		hs+='width: 293px;';
		hs+='height: 159px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._crew.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 293px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #484848;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		this._crew__text.setAttribute('style',hs);
		this._crew.ggTextDiv.innerHTML="<b>Roles in the Navy<\/b><br>The most junior job on a ship was the deck hand. The deck hands helped the more experienced sailors who were known as ordinary seamen, or able seamen if they had more than two years' experience. Above the able seamen were the midshipmen and above them the officer ranks. The officer ranks included captain, the man who controlled the ship, and admiral, the man who commanded many ships or even the whole navy. <p><b>Swyddogaethau yn y Llynges<\/b><br>Y swydd isaf ar long fyddai\u2019r morwr cyffredin. Roedd y morwyr cyffredin yn helpu\u2019r morwyr mwy profiadol a elwir yn forwyr cymwys, os oedd ganddynt mwy na dwy flynedd o brofiad. Uwchben y morwyr cymwys oedd y canol-longwyr ac uwch eu pennau nhw oedd y swyddogion. Roedd y swyddogion yn cynnwys y capten, y person oedd yn gyfrifol am y llong, a\u2019r llyngesydd, y person oedd yn gyfrifol am nifer o longau, neu\u2019r llynges i gyd.<\/p>";
		this._crew.appendChild(this._crew__text);
		this._crew.onclick=function () {
			flag=(me._crew.style.visibility=='hidden');
			me._crew.style[domTransition]='none';
			me._crew.style.visibility=flag?'inherit':'hidden';
			me._crew.ggVisible=flag;
		}
		this.divSkin.appendChild(this._crew);
		this._bridge=document.createElement('div');
		this._bridge__text=document.createElement('div');
		this._bridge.className='ggskin ggskin_textdiv';
		this._bridge.ggTextDiv=this._bridge__text;
		this._bridge.ggId="Bridge";
		this._bridge.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._bridge.ggVisible=false;
		this._bridge.className='ggskin ggskin_text';
		this._bridge.ggType='text';
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  78px;';
		hs+='width: 293px;';
		hs+='height: 159px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._bridge.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 293px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #484848;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		this._bridge__text.setAttribute('style',hs);
		this._bridge.ggTextDiv.innerHTML="<b>Bridge<\/b><br>This is the bridge of HMS Caroline. The ship was commanded from this location.<p><b>Y Bont<\/b><br>Dyma bont HMS Caroline. Rheolwyd y llong o\u2019r lleoliad hyn.<\/p>";
		this._bridge.appendChild(this._bridge__text);
		this._bridge.onclick=function () {
			flag=(me._bridge.style.visibility=='hidden');
			me._bridge.style[domTransition]='none';
			me._bridge.style.visibility=flag?'inherit':'hidden';
			me._bridge.ggVisible=flag;
		}
		this.divSkin.appendChild(this._bridge);
		this._compass=document.createElement('div');
		this._compass__text=document.createElement('div');
		this._compass.className='ggskin ggskin_textdiv';
		this._compass.ggTextDiv=this._compass__text;
		this._compass.ggId="Compass";
		this._compass.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._compass.ggVisible=false;
		this._compass.className='ggskin ggskin_text';
		this._compass.ggType='text';
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  78px;';
		hs+='width: 293px;';
		hs+='height: 159px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._compass.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 293px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #484848;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		this._compass__text.setAttribute('style',hs);
		this._compass.ggTextDiv.innerHTML="<b>Compass<\/b><br>The ship's compass showed the crew which direction they were heading in and they used it to guide the ship on the correct course. <p><b>Cwmpawd<\/b><br>Roedd cwmpawd y llong yn dangos i\u2019r criw i ba gyfeiriad roeddent yn mynd a defnyddiwyd hi i dywys y llong ar y trywydd cywir.<\/p>";
		this._compass.appendChild(this._compass__text);
		this._compass.onclick=function () {
			flag=(me._compass.style.visibility=='hidden');
			me._compass.style[domTransition]='none';
			me._compass.style.visibility=flag?'inherit':'hidden';
			me._compass.ggVisible=flag;
		}
		this.divSkin.appendChild(this._compass);
		this._communication=document.createElement('div');
		this._communication__text=document.createElement('div');
		this._communication.className='ggskin ggskin_textdiv';
		this._communication.ggTextDiv=this._communication__text;
		this._communication.ggId="Communication";
		this._communication.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._communication.ggVisible=false;
		this._communication.className='ggskin ggskin_text';
		this._communication.ggType='text';
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  78px;';
		hs+='width: 293px;';
		hs+='height: 159px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._communication.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 293px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #484848;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		this._communication__text.setAttribute('style',hs);
		this._communication.ggTextDiv.innerHTML="<b>Communication<\/b><br>Before telephones, ships had a number of different ways to communicate with one another. If the ships were quite close together then semaphore could be used. With semaphore, a message is passed by a crew member holding two flags, one in either hand. By holding the two flags in different positions, each meaning a different command, one ship can communicate with another. A second option was morse code. Morse code could be done using a lamp, so could be seen from further away. Each letter could be signalled using a combination of short and long bursts of light.<p><b>Cyfathrebu<\/b><br>Cyn teleffonau, roedd llongau\u2019n defnyddio nifer o ffyrdd gwahanol i gyfathrebu gyda\u2019i gilydd. Os oedd y llongau\u2019n agos i\u2019w gilydd byddai semaffor yn gallu cael ei ddefnyddio. Gyda semaffor, roedd negeseuon yn cael eu danfon gan aelod o\u2019r criw drwy ddal dwy faner, un yn y naill law. Drwy ddal y baneri mewn safleoedd gwahanol, roedd negeseuon gwahanol yn cael eu danfon ac yn caniat\xe1u i longau allu cyfathrebu gyda\u2019i gilydd. Opsiwn arall oedd Cod Morse. Gellid ddefnyddio\u2019r Cod Morse drwy ddefnyddio lamp, a fyddai\u2019n caniat\xe1u i\u2019r neges gael ei weld yn bell i ffwrdd. Gyrrwyd pob llythyren drwy ddefnyddio cyfuniad o fyrstiau byr a hir o oleuni.<\/p>";
		this._communication.appendChild(this._communication__text);
		this._communication.onclick=function () {
			flag=(me._communication.style.visibility=='hidden');
			me._communication.style[domTransition]='none';
			me._communication.style.visibility=flag?'inherit':'hidden';
			me._communication.ggVisible=flag;
		}
		this.divSkin.appendChild(this._communication);
		this._shellstore=document.createElement('div');
		this._shellstore__text=document.createElement('div');
		this._shellstore.className='ggskin ggskin_textdiv';
		this._shellstore.ggTextDiv=this._shellstore__text;
		this._shellstore.ggId="ShellStore";
		this._shellstore.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._shellstore.ggVisible=false;
		this._shellstore.className='ggskin ggskin_text';
		this._shellstore.ggType='text';
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  78px;';
		hs+='width: 293px;';
		hs+='height: 159px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._shellstore.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 293px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #484848;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		this._shellstore__text.setAttribute('style',hs);
		this._shellstore.ggTextDiv.innerHTML="<b>Shell Store<\/b><br>This the shell store, shells were stored here for use in HMS Caroline's guns.<p><b>Storfa\u2019r Tanbelenni<\/b><br>Dyma storfa\u2019r tanbelenni. Storiwyd tanbelenni magnelau HMS Caroline yma.<\/p>";
		this._shellstore.appendChild(this._shellstore__text);
		this._shellstore.onclick=function () {
			flag=(me._shellstore.style.visibility=='hidden');
			me._shellstore.style[domTransition]='none';
			me._shellstore.style.visibility=flag?'inherit':'hidden';
			me._shellstore.ggVisible=flag;
		}
		this.divSkin.appendChild(this._shellstore);
		this._guns=document.createElement('div');
		this._guns__text=document.createElement('div');
		this._guns.className='ggskin ggskin_textdiv';
		this._guns.ggTextDiv=this._guns__text;
		this._guns.ggId="Guns";
		this._guns.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._guns.ggVisible=false;
		this._guns.className='ggskin ggskin_text';
		this._guns.ggType='text';
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  78px;';
		hs+='width: 293px;';
		hs+='height: 159px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._guns.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 293px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #484848;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		this._guns__text.setAttribute('style',hs);
		this._guns.ggTextDiv.innerHTML="<b>HMS Caroline's guns<\/b><br>HMS Caroline's main armament was a pair of six inch guns. These guns had a range of over 19,000 metres - over 11 miles.  Larger battleships were armed with guns that could fire at a range of nearly 20 miles.<p><b>Magnelau HMS Caroline<\/b><br>Prif arf HMS Caroline oedd p\xe2r o fagnelau chwe modfedd. Roedd gan y magnelau yma bellter o dros 19,000 o fetrau \u2013 dros 11 milltir. Arfogwyd cadlongau mwy gan fagnelau oedd yn gallu tanio hyd at 20 milltir.<\/p>";
		this._guns.appendChild(this._guns__text);
		this._guns.onclick=function () {
			flag=(me._guns.style.visibility=='hidden');
			me._guns.style[domTransition]='none';
			me._guns.style.visibility=flag?'inherit':'hidden';
			me._guns.ggVisible=flag;
		}
		this.divSkin.appendChild(this._guns);
		this._torpedoes=document.createElement('div');
		this._torpedoes__text=document.createElement('div');
		this._torpedoes.className='ggskin ggskin_textdiv';
		this._torpedoes.ggTextDiv=this._torpedoes__text;
		this._torpedoes.ggId="Torpedoes";
		this._torpedoes.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._torpedoes.ggVisible=false;
		this._torpedoes.className='ggskin ggskin_text';
		this._torpedoes.ggType='text';
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  78px;';
		hs+='width: 293px;';
		hs+='height: 159px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._torpedoes.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 293px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #484848;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		this._torpedoes__text.setAttribute('style',hs);
		this._torpedoes.ggTextDiv.innerHTML="<b>Torpedoes<\/b><br>HMS Caroline was also armed with torpedoes. Torpedoes are underwater explosives. They are launched out of torpedo tubes and move through the water under their own power. By hitting their target below the water line, torpedoes can cause catastrophic damage to a ship's hull, causing the ship to sink. <br><br><b>Torpidos<\/b><br>Arfogwyd HMS Caroline hefyd gan dorpidos. Roedd torpidos yn ffrwydron tanfor. Maen nhw\u2019n cael eu lansio mas o diwbiau torpido ac yn symud trwy\u2019r d\u0175r. Drwy taro\u2019u targed o dan arwyneb y d\u0175r, roedd torpidos yn gallu achosi difrod niweidiol tu hwnt i gorff llong gan achosi i\u2019r llong suddo.";
		this._torpedoes.appendChild(this._torpedoes__text);
		this._torpedoes.onclick=function () {
			flag=(me._torpedoes.style.visibility=='hidden');
			me._torpedoes.style[domTransition]='none';
			me._torpedoes.style.visibility=flag?'inherit':'hidden';
			me._torpedoes.ggVisible=flag;
		}
		this.divSkin.appendChild(this._torpedoes);
		this._box_5=document.createElement('div');
		this._box_5__text=document.createElement('div');
		this._box_5.className='ggskin ggskin_textdiv';
		this._box_5.ggTextDiv=this._box_5__text;
		this._box_5.ggId="Box 5";
		this._box_5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._box_5.ggVisible=true;
		this._box_5.className='ggskin ggskin_text';
		this._box_5.ggType='text';
		this._box_5.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-39 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-41 + h) + 'px';
			}
			this.ggTextDiv.style.left=Math.floor(0 + (29-this.ggTextDiv.offsetWidth)) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -39px;';
		hs+='top:  -41px;';
		hs+='width: 21px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 100% 50%;';
		hs+='visibility: inherit;';
		this._box_5.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 11px;';
		hs+=cssPrefix + 'border-radius: 11px;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		this._box_5__text.setAttribute('style',hs);
		this._box_5.ggTextDiv.innerHTML="Shell Store\/Storfa\u2019r Tanbelenni";
		this._box_5.appendChild(this._box_5__text);
		this._box_5.onclick=function () {
			me.player.openNext("{node8}","");
		}
		this.divSkin.appendChild(this._box_5);
		this._box_4=document.createElement('div');
		this._box_4__text=document.createElement('div');
		this._box_4.className='ggskin ggskin_textdiv';
		this._box_4.ggTextDiv=this._box_4__text;
		this._box_4.ggId="Box 4";
		this._box_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._box_4.ggVisible=true;
		this._box_4.className='ggskin ggskin_text';
		this._box_4.ggType='text';
		this._box_4.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-39 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-73 + h) + 'px';
			}
			this.ggTextDiv.style.left=Math.floor(0 + (29-this.ggTextDiv.offsetWidth)) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -39px;';
		hs+='top:  -73px;';
		hs+='width: 21px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 100% 50%;';
		hs+='visibility: inherit;';
		this._box_4.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 11px;';
		hs+=cssPrefix + 'border-radius: 11px;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		this._box_4__text.setAttribute('style',hs);
		this._box_4.ggTextDiv.innerHTML="Wheel Room\/Stafell Y Llyw";
		this._box_4.appendChild(this._box_4__text);
		this._box_4.onclick=function () {
			me.player.openNext("{node7}","");
		}
		this.divSkin.appendChild(this._box_4);
		this._box_1=document.createElement('div');
		this._box_1__text=document.createElement('div');
		this._box_1.className='ggskin ggskin_textdiv';
		this._box_1.ggTextDiv=this._box_1__text;
		this._box_1.ggId="Box 1";
		this._box_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._box_1.ggVisible=true;
		this._box_1.className='ggskin ggskin_text';
		this._box_1.ggType='text';
		this._box_1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-39 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-138 + h) + 'px';
			}
			this.ggTextDiv.style.left=Math.floor(0 + (29-this.ggTextDiv.offsetWidth)) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -39px;';
		hs+='top:  -138px;';
		hs+='width: 21px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 100% 50%;';
		hs+='visibility: inherit;';
		this._box_1.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 11px;';
		hs+=cssPrefix + 'border-radius: 11px;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		this._box_1__text.setAttribute('style',hs);
		this._box_1.ggTextDiv.innerHTML="Bridge\/Y Bont";
		this._box_1.appendChild(this._box_1__text);
		this._box_1.onclick=function () {
			me.player.openNext("{node4}","");
		}
		this.divSkin.appendChild(this._box_1);
		this._box_3=document.createElement('div');
		this._box_3__text=document.createElement('div');
		this._box_3.className='ggskin ggskin_textdiv';
		this._box_3.ggTextDiv=this._box_3__text;
		this._box_3.ggId="Box 3";
		this._box_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._box_3.ggVisible=true;
		this._box_3.className='ggskin ggskin_text';
		this._box_3.ggType='text';
		this._box_3.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-39 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-170 + h) + 'px';
			}
			this.ggTextDiv.style.left=Math.floor(0 + (29-this.ggTextDiv.offsetWidth)) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -39px;';
		hs+='top:  -170px;';
		hs+='width: 21px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 100% 50%;';
		hs+='visibility: inherit;';
		this._box_3.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 11px;';
		hs+=cssPrefix + 'border-radius: 11px;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		this._box_3__text.setAttribute('style',hs);
		this._box_3.ggTextDiv.innerHTML="Galley\/Cegin";
		this._box_3.appendChild(this._box_3__text);
		this._box_3.onclick=function () {
			me.player.openNext("{node6}","");
		}
		this.divSkin.appendChild(this._box_3);
		this._box_2=document.createElement('div');
		this._box_2__text=document.createElement('div');
		this._box_2.className='ggskin ggskin_textdiv';
		this._box_2.ggTextDiv=this._box_2__text;
		this._box_2.ggId="Box 2";
		this._box_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._box_2.ggVisible=true;
		this._box_2.className='ggskin ggskin_text';
		this._box_2.ggType='text';
		this._box_2.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-40 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-105 + h) + 'px';
			}
			this.ggTextDiv.style.left=Math.floor(0 + (29-this.ggTextDiv.offsetWidth)) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -40px;';
		hs+='top:  -105px;';
		hs+='width: 21px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 100% 50%;';
		hs+='visibility: inherit;';
		this._box_2.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 11px;';
		hs+=cssPrefix + 'border-radius: 11px;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		this._box_2__text.setAttribute('style',hs);
		this._box_2.ggTextDiv.innerHTML="Corridor\/Coridor";
		this._box_2.appendChild(this._box_2__text);
		this._box_2.onclick=function () {
			me.player.openNext("{node5}","");
		}
		this.divSkin.appendChild(this._box_2);
		this._markertemplate__normal=this._marker_normal.cloneNode(true);
		this._markertemplate__normal.style.visibility='inherit';
		this._markertemplate__normal.style.left=0;
		this._markertemplate__normal.style.top=0;
		this._markertemplate.ggMarkerNormal=this._markertemplate__normal;
		this._markertemplate__active=this._marker_active.cloneNode(true);
		this._markertemplate__active.style.visibility='hidden';
		this._markertemplate__active.style.left=0;
		this._markertemplate__active.style.top=0;
		this._markertemplate.ggMarkerActive=this._markertemplate__active;
		if (this._markertemplate.firstChild) {
			this._markertemplate.insertBefore(this._markertemplate__active,this._markertemplate.firstChild);
		} else {
			this._markertemplate.appendChild(this._markertemplate__active);
		}
		if (this._markertemplate.firstChild) {
			this._markertemplate.insertBefore(this._markertemplate__normal,this._markertemplate.firstChild);
		} else {
			this._markertemplate.appendChild(this._markertemplate__normal);
		}
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this.divSkin.ggReLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='inherit';
			me._loading.ggVisible=true;
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
		if (id=='Wheel') {
			me._wheel.onclick();
		}
		if (id=='Food') {
			me._food.onclick();
		}
		if (id=='Galley') {
			me._galley.onclick();
		}
		if (id=='Telegraph') {
			me._telegraph.onclick();
		}
		if (id=='Corridor') {
			me._corridor.onclick();
		}
		if (id=='LivingQuarters') {
			me._livingquarters.onclick();
		}
		if (id=='Crew') {
			me._crew.onclick();
		}
		if (id=='Bridge') {
			me._bridge.onclick();
		}
		if (id=='Compass') {
			me._compass.onclick();
		}
		if (id=='Communication') {
			me._communication.onclick();
		}
		if (id=='ShellStore') {
			me._shellstore.onclick();
		}
		if (id=='Guns') {
			me._guns.onclick();
		}
		if (id=='Torpedoes') {
			me._torpedoes.onclick();
		}
		if (id=='Box5') {
			me._box_5.onclick();
		}
		if (id=='Box4') {
			me._box_4.onclick();
		}
		if (id=='Box1') {
			me._box_1.onclick();
		}
		if (id=='Box3') {
			me._box_3.onclick();
		}
		if (id=='Box2') {
			me._box_2.onclick();
		}
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		if (me.elementMouseDown['up']) {
			me.player.changeTiltLog(1,true);
		}
		if (me.elementMouseDown['down']) {
			me.player.changeTiltLog(-1,true);
		}
		if (me.elementMouseDown['left']) {
			me.player.changePanLog(1,true);
		}
		if (me.elementMouseDown['right']) {
			me.player.changePanLog(-1,true);
		}
		if (me.elementMouseDown['zoomin']) {
			me.player.changeFovLog(-1,true);
		}
		if (me.elementMouseDown['zoomout']) {
			me.player.changeFovLog(1,true);
		}
		this._loadingtext.ggUpdateText();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		this._title.ggUpdateText();
		this._description.ggUpdateText();
		this._author.ggUpdateText();
		this._datetime.ggUpdateText();
		this._copyright.ggUpdateText();
		this._marker_title.ggUpdateText();
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		this.elementMouseDown=new Array();
		this.elementMouseOver=new Array();
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position:absolute; left:0px;top:0px;visibility: inherit;');
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		{
			this.__div=document.createElement('div');
			this.__div.ggId="hotspot";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 350px;';
			hs+='top:  20px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._hstext.style[domTransition]='none';
				me._hstext.style.visibility='inherit';
				me._hstext.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._hstext.style[domTransition]='none';
				me._hstext.style.visibility='hidden';
				me._hstext.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._hsimage=document.createElement('div');
			this._hsimage.ggId="hsimage";
			this._hsimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hsimage.ggVisible=true;
			this._hsimage.className='ggskin ggskin_svg';
			this._hsimage.ggType='svg';
			hs ='position:absolute;';
			hs+='left: -16px;';
			hs+='top:  -16px;';
			hs+='width: 32px;';
			hs+='height: 32px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._hsimage.setAttribute('style',hs);
			this._hsimage__img=document.createElement('img');
			this._hsimage__img.className='ggskin ggskin_svg';
			this._hsimage__img.setAttribute('src',basePath + 'images/hsimage.png');
			this._hsimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
			this._hsimage__img['ondragstart']=function() { return false; };
			this._hsimage.appendChild(this._hsimage__img);
			this.__div.appendChild(this._hsimage);
			this._hstext=document.createElement('div');
			this._hstext__text=document.createElement('div');
			this._hstext.className='ggskin ggskin_textdiv';
			this._hstext.ggTextDiv=this._hstext__text;
			this._hstext.ggId="hstext";
			this._hstext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext.ggVisible=false;
			this._hstext.className='ggskin ggskin_text';
			this._hstext.ggType='text';
			this._hstext.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -50px;';
			hs+='top:  20px;';
			hs+='width: 95px;';
			hs+='height: 17px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._hstext.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.705882);';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._hstext__text.setAttribute('style',hs);
			this._hstext.ggTextDiv.innerHTML=me.hotspot.title;
			this._hstext.appendChild(this._hstext__text);
			this.__div.appendChild(this._hstext);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};