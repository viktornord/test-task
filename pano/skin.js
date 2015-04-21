// Garden Gnome Software - Skin
// Pano2VR pro 4.5.3/10717
// Filename: simplex1.ggsk
// Generated Tue Apr 21 11:50:54 2015

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
		hs+='top:  10px;';
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
		this._soldierskit=document.createElement('div');
		this._soldierskit__text=document.createElement('div');
		this._soldierskit.className='ggskin ggskin_textdiv';
		this._soldierskit.ggTextDiv=this._soldierskit__text;
		this._soldierskit.ggId="SoldiersKit";
		this._soldierskit.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._soldierskit.ggVisible=false;
		this._soldierskit.className='ggskin ggskin_text';
		this._soldierskit.ggType='text';
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  78px;';
		hs+='width: 293px;';
		hs+='height: 159px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._soldierskit.setAttribute('style',hs);
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
		hs+='overflow-y: auto;';
		this._soldierskit__text.setAttribute('style',hs);
		this._soldierskit.ggTextDiv.innerHTML="<b>Soldier's Kit<\/b><br>A soldier in the trenches had to carry everything he needed with him. The pouches in his webbing contained everything from his knife and fork to his shaving equipment and ammunition. He also carried a shovel and a bayonet - a knife that attached to the barrel of his rifle for use in close-combat with the enemy. <p><b>Cit y Milwr<\/b><br>Roedd rhaid i\u2019r milwr yn y ffosydd gario popeth roedd angen gyda fe. Roedd y pocedi yn y webin yn cynnwys popeth o\u2019i gyllell a fforc i\u2019w cyfarpar eillio a\u2019i fwledi. Roedd ef hefyd yn cario rhaw a bidog \u2013 cyllell gallai gael ei glymu at faril y reiffl i gael ei ddefnyddio mewn brwydrau dwrn-tra-dwrn gyda\u2019r gelyn.<\/p>";
		this._soldierskit.appendChild(this._soldierskit__text);
		this._soldierskit.onclick=function () {
			flag=(me._soldierskit.style.visibility=='hidden');
			me._soldierskit.style[domTransition]='none';
			me._soldierskit.style.visibility=flag?'inherit':'hidden';
			me._soldierskit.ggVisible=flag;
		}
		this.divSkin.appendChild(this._soldierskit);
		this._flares=document.createElement('div');
		this._flares__text=document.createElement('div');
		this._flares.className='ggskin ggskin_textdiv';
		this._flares.ggTextDiv=this._flares__text;
		this._flares.ggId="Flares";
		this._flares.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._flares.ggVisible=false;
		this._flares.className='ggskin ggskin_text';
		this._flares.ggType='text';
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  78px;';
		hs+='width: 293px;';
		hs+='height: 159px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._flares.setAttribute('style',hs);
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
		hs+='overflow-y: auto;';
		this._flares__text.setAttribute('style',hs);
		this._flares.ggTextDiv.innerHTML="<b>Flares<\/b><br>Flares were used to illuminate areas of the battlefield, helping soldiers to spot an approaching attack. Flares could also be used as a means of communication, with different colours used to represent messages, for example calling for help. Other means of communication included telephones (if a cable could be run between locations) homing pigeons and runners. <p><b>Fflachiadau<\/b><br>Defnyddiwyd fflachiadau i oleuo rhannau o faes y gad a chynorthwyo milwyr i weld unrhyw ymosodiadau oedd yn digwydd. Gellid defnyddio fflachiadau hefyd fel ffordd o gyfathrebu, gyda lliwiau gwahanol yn cynrychioli negeseuon, er enghraifft yn galw am help. Roedd dulliau eraill o gyfathrebu yn cynnwys defnyddio teleffonau (os oedd cebl yn gallu cael ei rhedeg rhwng y lleoliadau), colomennod dychwel, a rhedwyr.<\/p>";
		this._flares.appendChild(this._flares__text);
		this._flares.onclick=function () {
			flag=(me._flares.style.visibility=='hidden');
			me._flares.style[domTransition]='none';
			me._flares.style.visibility=flag?'inherit':'hidden';
			me._flares.ggVisible=flag;
		}
		this.divSkin.appendChild(this._flares);
		this._wirecutters=document.createElement('div');
		this._wirecutters__text=document.createElement('div');
		this._wirecutters.className='ggskin ggskin_textdiv';
		this._wirecutters.ggTextDiv=this._wirecutters__text;
		this._wirecutters.ggId="Wirecutters";
		this._wirecutters.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._wirecutters.ggVisible=false;
		this._wirecutters.className='ggskin ggskin_text';
		this._wirecutters.ggType='text';
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  78px;';
		hs+='width: 293px;';
		hs+='height: 159px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._wirecutters.setAttribute('style',hs);
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
		hs+='overflow-y: auto;';
		this._wirecutters__text.setAttribute('style',hs);
		this._wirecutters.ggTextDiv.innerHTML="<b>Wire cutters<\/b><br>Barbed wire was one of the biggest threats to a soldier on the Western Front. They could easily become tangled in it during an attack, leaving them vulnerable to enemy fire. One of the first jobs during an attack was to cut through the wire using these cutters. <p><b>Torwyr Gwifrau<\/b><br>Un o\u2019r bygythiadau mwyaf i filwyr ar Ffrynt y Gorllewin oedd y wifren bigog. Gallai\u2019r milwyr ddod yn sownd ynddynt yn ystod brwydr a\u2019i gadael yn hawdd i\u2019w targedi gan y gelyn. Un o\u2019r swyddi cyntaf yn ystod ymosodiad oedd i dorri trwy\u2019r gwifrau bigog gan ddefnyddio torwyr gwifrau.<\/p>";
		this._wirecutters.appendChild(this._wirecutters__text);
		this._wirecutters.onclick=function () {
			flag=(me._wirecutters.style.visibility=='hidden');
			me._wirecutters.style[domTransition]='none';
			me._wirecutters.style.visibility=flag?'inherit':'hidden';
			me._wirecutters.ggVisible=flag;
		}
		this.divSkin.appendChild(this._wirecutters);
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
		hs+='overflow-y: auto;';
		this._food__text.setAttribute('style',hs);
		this._food.ggTextDiv.innerHTML="<b>Trench food<\/b><br>Soldiers in the trenches lived on a diet of meat, bread and vegetables. Their families sent other treats such as chocolate and cake. During the later years of the war, when Britain was getting short of food because of German U-Boat attacks on merchant shipping, the rations for soldiers deteriorated. A shortage of flour meant bread was made with ground up turnips and the meat consisted mostly of fat. <p><b>Bwyd y Ffosydd<\/b><br>Roedd milwyr yn y ffosydd yn byw ar ddiet o gig, bara a llysiau. Roedd eu teuluoedd yn danfon danteithion fel siocledi a teisennod. Yn ystod blynyddoedd hwyrach y rhyfel pan roedd ymosodiadau llongau tanfor yr Almaenwyr yn effeithio ar gyflenwadau nwyddau ac achosi prinder bwyd, fe leihaodd dognau bwyd y milwyr. Golygwyd prinder blawd fod bara yn cael ei wneud gan faip wedi eu malu ac roedd y cig yn bennaf yn cynnwys braster.<\/p>";
		this._food.appendChild(this._food__text);
		this._food.onclick=function () {
			flag=(me._food.style.visibility=='hidden');
			me._food.style[domTransition]='none';
			me._food.style.visibility=flag?'inherit':'hidden';
			me._food.ggVisible=flag;
		}
		this.divSkin.appendChild(this._food);
		this._cooker=document.createElement('div');
		this._cooker__text=document.createElement('div');
		this._cooker.className='ggskin ggskin_textdiv';
		this._cooker.ggTextDiv=this._cooker__text;
		this._cooker.ggId="Cooker";
		this._cooker.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._cooker.ggVisible=false;
		this._cooker.className='ggskin ggskin_text';
		this._cooker.ggType='text';
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  78px;';
		hs+='width: 297px;';
		hs+='height: 19px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._cooker.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 297px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._cooker__text.setAttribute('style',hs);
		this._cooker.ggTextDiv.innerHTML="<b>Cooking stove<\/b><br>Men in the front line had places where they could cook food and boil water for tea.  This little stove is called a Tommy cooker. These were issued to soldiers along with fuel to burn in them. However soldiers complained that it took a very long time to cook anything!<p><b>Ffwrn Goginio<\/b><br>Roedd gan filwyr ar y linell flaen lefydd i goginio bwyd a berwi d\u0175r i wneud te. Gelwid y ffwrn bach hon yn \u2018cwcer Tommy\u2019. Darparwyd rhain i\u2019r milwyr ynghyd a thanwydd i losgi ynddynt. Ond roedd milwyr yn cwyno fod hi\u2019n cymryd amser hir i goginio unrhyw beth!<\/p>";
		this._cooker.appendChild(this._cooker__text);
		this._cooker.onclick=function () {
			flag=(me._cooker.style.visibility=='hidden');
			me._cooker.style[domTransition]='none';
			me._cooker.style.visibility=flag?'inherit':'hidden';
			me._cooker.ggVisible=flag;
		}
		this.divSkin.appendChild(this._cooker);
		this._watercan=document.createElement('div');
		this._watercan__text=document.createElement('div');
		this._watercan.className='ggskin ggskin_textdiv';
		this._watercan.ggTextDiv=this._watercan__text;
		this._watercan.ggId="WaterCan";
		this._watercan.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._watercan.ggVisible=false;
		this._watercan.className='ggskin ggskin_text';
		this._watercan.ggType='text';
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  78px;';
		hs+='width: 293px;';
		hs+='height: 159px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._watercan.setAttribute('style',hs);
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
		this._watercan__text.setAttribute('style',hs);
		this._watercan.ggTextDiv.innerHTML="<b>Water can<\/b><br>Clean water was a rare and valuable resource in the trench - water was carried in cans like this one.<p><b>Can Dwr<\/b><br>Roedd dwr glan yn brin ac yn adnodd gwerthfawr \u2013 cariwyd dwr mewn caniau fel yr un yma.<\/p>";
		this._watercan.appendChild(this._watercan__text);
		this._watercan.onclick=function () {
			flag=(me._watercan.style.visibility=='hidden');
			me._watercan.style[domTransition]='none';
			me._watercan.style.visibility=flag?'inherit':'hidden';
			me._watercan.ggVisible=flag;
		}
		this.divSkin.appendChild(this._watercan);
		this._dugout=document.createElement('div');
		this._dugout__text=document.createElement('div');
		this._dugout.className='ggskin ggskin_textdiv';
		this._dugout.ggTextDiv=this._dugout__text;
		this._dugout.ggId="Dugout";
		this._dugout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dugout.ggVisible=false;
		this._dugout.className='ggskin ggskin_text';
		this._dugout.ggType='text';
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  78px;';
		hs+='width: 293px;';
		hs+='height: 159px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._dugout.setAttribute('style',hs);
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
		this._dugout__text.setAttribute('style',hs);
		this._dugout.ggTextDiv.innerHTML="<b>Dugout<\/b><br>Dugouts were shelters built beneath ground where soldiers could rest and keep some possessions. Dugouts came in different sizes but all offered at least some protection from enemy shellfire for the soldiers inside. However it was not uncommon for a dugout to take a direct hit, which could result in the death of all those inside. <p><b>Cloddfa<\/b><br>Roedd cloddfeydd yn loches wedi eu hadeiladu o dan ddaear lle gallai milwyr orffwys a chadw peth eiddo. Roedd cloddfeydd yn amrywio mewn maint ond roeddent i gyd yn cynnig rhyw amddiffyniad i\u2019r milwyr tu mewn rhag tanbelennau\u2019r gelyn. Fodd bynnag, doedd hi ddim yn rhy anghyffredin i gloddfa dderbyn trawiad uniongyrchol, a all ladd pawb tu fewn.<\/p>";
		this._dugout.appendChild(this._dugout__text);
		this._dugout.onclick=function () {
			flag=(me._dugout.style.visibility=='hidden');
			me._dugout.style[domTransition]='none';
			me._dugout.style.visibility=flag?'inherit':'hidden';
			me._dugout.ggVisible=flag;
		}
		this.divSkin.appendChild(this._dugout);
		this._handgrenade=document.createElement('div');
		this._handgrenade__text=document.createElement('div');
		this._handgrenade.className='ggskin ggskin_textdiv';
		this._handgrenade.ggTextDiv=this._handgrenade__text;
		this._handgrenade.ggId="Handgrenade";
		this._handgrenade.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._handgrenade.ggVisible=false;
		this._handgrenade.className='ggskin ggskin_text';
		this._handgrenade.ggType='text';
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  78px;';
		hs+='width: 293px;';
		hs+='height: 159px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._handgrenade.setAttribute('style',hs);
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
		this._handgrenade__text.setAttribute('style',hs);
		this._handgrenade.ggTextDiv.innerHTML="<b>Hand Grenades<\/b><br>Here the soldier is putting fuses into the hand grenades, preparing them for use. Hand grenades became a common weapon on the First World War battlefield. There were various types of hand grenade, the most popular among British soldiers was called the Mills Bomb. <p><b>Bomiau Llaw<\/b><br>Yma mae\u2019r milwr yn rhoi ffiwsiau mewn i\u2019r bomiau llaw, a\u2019u paratoi yn barod i gael eu defnyddio. Daeth bomiau llaw yn arf gyffredin ar maes y gad y Rhyfel Byd Cyntaf. Roedd gwahanol mathau o fomiau llaw yn bodoli, yr un mwyaf poblogaidd ymysg milwyr Prydain oedd y Bom Mills.<\/p>";
		this._handgrenade.appendChild(this._handgrenade__text);
		this._handgrenade.onclick=function () {
			flag=(me._handgrenade.style.visibility=='hidden');
			me._handgrenade.style[domTransition]='none';
			me._handgrenade.style.visibility=flag?'inherit':'hidden';
			me._handgrenade.ggVisible=flag;
		}
		this.divSkin.appendChild(this._handgrenade);
		this._gasalarm=document.createElement('div');
		this._gasalarm__text=document.createElement('div');
		this._gasalarm.className='ggskin ggskin_textdiv';
		this._gasalarm.ggTextDiv=this._gasalarm__text;
		this._gasalarm.ggId="GasAlarm";
		this._gasalarm.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gasalarm.ggVisible=false;
		this._gasalarm.className='ggskin ggskin_text';
		this._gasalarm.ggType='text';
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  78px;';
		hs+='width: 293px;';
		hs+='height: 159px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._gasalarm.setAttribute('style',hs);
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
		this._gasalarm__text.setAttribute('style',hs);
		this._gasalarm.ggTextDiv.innerHTML="<b>Gas Alarm<\/b><br>This is the gas alarm. When sounded, the soldiers would have only a short time to put on their respirators to protect themselves from the gas. <p><b>Larwm nwy<\/b><br>Dyma\u2019r larwm nwy. Pan gannir y larwm nwy, roedd gan y milwyr ychydig o amser i rhoi eu anadlyddion ymlaen i\u2019w amddiffyn rhag y nwy.<\/p>";
		this._gasalarm.appendChild(this._gasalarm__text);
		this._gasalarm.onclick=function () {
			flag=(me._gasalarm.style.visibility=='hidden');
			me._gasalarm.style[domTransition]='none';
			me._gasalarm.style.visibility=flag?'inherit':'hidden';
			me._gasalarm.ggVisible=flag;
		}
		this.divSkin.appendChild(this._gasalarm);
		this._ammunition=document.createElement('div');
		this._ammunition__text=document.createElement('div');
		this._ammunition.className='ggskin ggskin_textdiv';
		this._ammunition.ggTextDiv=this._ammunition__text;
		this._ammunition.ggId="Ammunition";
		this._ammunition.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ammunition.ggVisible=false;
		this._ammunition.className='ggskin ggskin_text';
		this._ammunition.ggType='text';
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  78px;';
		hs+='width: 293px;';
		hs+='height: 159px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._ammunition.setAttribute('style',hs);
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
		this._ammunition__text.setAttribute('style',hs);
		this._ammunition.ggTextDiv.innerHTML="<b>Ammo Box<\/b><br>This box would contain spare ammunition for rifles and machine guns.<p><b>Blwch Bwledi<\/b><br>Roedd y blwch hyn yn cynnwys bwledi sb\xe2r ar gyfer reifflau a drylliau peiriant.<\/p>";
		this._ammunition.appendChild(this._ammunition__text);
		this._ammunition.onclick=function () {
			flag=(me._ammunition.style.visibility=='hidden');
			me._ammunition.style[domTransition]='none';
			me._ammunition.style.visibility=flag?'inherit':'hidden';
			me._ammunition.ggVisible=flag;
		}
		this.divSkin.appendChild(this._ammunition);
		this._rifle=document.createElement('div');
		this._rifle__text=document.createElement('div');
		this._rifle.className='ggskin ggskin_textdiv';
		this._rifle.ggTextDiv=this._rifle__text;
		this._rifle.ggId="Rifle";
		this._rifle.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rifle.ggVisible=false;
		this._rifle.className='ggskin ggskin_text';
		this._rifle.ggType='text';
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  78px;';
		hs+='width: 293px;';
		hs+='height: 159px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._rifle.setAttribute('style',hs);
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
		this._rifle__text.setAttribute('style',hs);
		this._rifle.ggTextDiv.innerHTML="<b>Lee-Enfield Rifle<\/b><br>The Lee-Enfield rifle was the standard rifle of the British infantryman in World War One. It was less accurate than the German Mauser rifle but it held more rounds (bullets) and could be fired faster. A well trained British soldier could fire twenty rounds a minute. In the trench, a soldier's rifle could never be more than an arm's length away from him. <p><b>Reiffl Lee-Enfield<\/b><br>Y reiffl Lee-Enfield oedd reiffl safonol troedfilwyr Prydeinig yn ystod y Rhyfel Byd Cyntaf. Doedd hi ddim mor gywrain a\u2019r Mauser Almaenaidd ond roedd hi\u2019n dal mwy o fwledi a gellid ei tanio hi\u2019n gyflymach. Gallai milwr profiadol danio ugain rownd mewn munud. Yn y ffosydd, doedd y reiffl byth yn bell i ffwrdd o\u2019r milwr.<\/p>";
		this._rifle.appendChild(this._rifle__text);
		this._rifle.onclick=function () {
			flag=(me._rifle.style.visibility=='hidden');
			me._rifle.style[domTransition]='none';
			me._rifle.style.visibility=flag?'inherit':'hidden';
			me._rifle.ggVisible=flag;
		}
		this.divSkin.appendChild(this._rifle);
		this._rum=document.createElement('div');
		this._rum__text=document.createElement('div');
		this._rum.className='ggskin ggskin_textdiv';
		this._rum.ggTextDiv=this._rum__text;
		this._rum.ggId="Rum";
		this._rum.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rum.ggVisible=false;
		this._rum.className='ggskin ggskin_text';
		this._rum.ggType='text';
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  78px;';
		hs+='width: 293px;';
		hs+='height: 159px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._rum.setAttribute('style',hs);
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
		this._rum__text.setAttribute('style',hs);
		this._rum.ggTextDiv.innerHTML="<b>Rum<\/b><br>Giving soldiers (and sailors) a ration of rum each day was a tradition in the British military. Each battalion had a rum jar and the rum was issued to the soldiers by a senior officer. The rum was used to reward hard work but disobedience could lead to a soldier being excluded from having his rum ration. The rum also helped keep spirits up and to make men feel bolder and braver in the face of the enemy. It was a comforting and warming drink and could also help the men to get the sleep even if they were uncomfortable or cold. <p><b>Rym<\/b><br>Roedd rhoi dogn o rym i filwyr (a morwyr) bob dydd yn draddodiad yn lluoedd arfog Prydain. Roedd gan bob fataliwn jar rym a byddai\u2019r rym yn cael ei darparu i\u2019r milwyr gan swyddogion uwch. Defnyddiwyd y rym fel gwobr am waith caled, ond gall anufudd-dod arwain at filwr yn colli mas ar ei ddogn o rym. Roedd rym hefyd yn helpu cadw ysbryd y milwyr yn uchel ac yn hybu\u2019r milwyr i deimlo\u2019n fwy dewr cyn wynebu\u2019r gelyn. Roedd hi\u2019n ddiod cysurlon a fyddai hefyd yn gallu helpu\u2019r milwyr i gysgu hyd yn oed os oeddent yn oer neu\u2019n anghyfforddus.<\/p>";
		this._rum.appendChild(this._rum__text);
		this._rum.onclick=function () {
			flag=(me._rum.style.visibility=='hidden');
			me._rum.style[domTransition]='none';
			me._rum.style.visibility=flag?'inherit':'hidden';
			me._rum.ggVisible=flag;
		}
		this.divSkin.appendChild(this._rum);
		this._tobacco=document.createElement('div');
		this._tobacco__text=document.createElement('div');
		this._tobacco.className='ggskin ggskin_textdiv';
		this._tobacco.ggTextDiv=this._tobacco__text;
		this._tobacco.ggId="Tobacco";
		this._tobacco.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tobacco.ggVisible=false;
		this._tobacco.className='ggskin ggskin_text';
		this._tobacco.ggType='text';
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  78px;';
		hs+='width: 293px;';
		hs+='height: 159px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tobacco.setAttribute('style',hs);
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
		this._tobacco__text.setAttribute('style',hs);
		this._tobacco.ggTextDiv.innerHTML="<b>Tobacco Tin<\/b><br>In World War One nothing was known about bad effects of smoking on your health. Tobacco in a pipe or a cigarette was used to comfort and calm soldiers. Cigarettes were given handed out by nurses in hospitals to wounded soldiers.<p><b>Tin Baco<\/b><br>Yn y Rhyfel Byd Cyntaf prin oedd y wybodaeth am effeithiau gwael ysmygu ar iechyd. Ysmygwyd baco mewn pib neu sigar\xe9t i gysuro\u2019r milwyr. Weithiau rhoddwyd sigar\xe9ts i\u2019r milwyr gan y nyrsys yn yr ysbytai.<\/p>";
		this._tobacco.appendChild(this._tobacco__text);
		this._tobacco.onclick=function () {
			flag=(me._tobacco.style.visibility=='hidden');
			me._tobacco.style[domTransition]='none';
			me._tobacco.style.visibility=flag?'inherit':'hidden';
			me._tobacco.ggVisible=flag;
		}
		this.divSkin.appendChild(this._tobacco);
		this._magnifyingglass=document.createElement('div');
		this._magnifyingglass__text=document.createElement('div');
		this._magnifyingglass.className='ggskin ggskin_textdiv';
		this._magnifyingglass.ggTextDiv=this._magnifyingglass__text;
		this._magnifyingglass.ggId="MagnifyingGlass";
		this._magnifyingglass.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._magnifyingglass.ggVisible=false;
		this._magnifyingglass.className='ggskin ggskin_text';
		this._magnifyingglass.ggType='text';
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  78px;';
		hs+='width: 293px;';
		hs+='height: 159px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._magnifyingglass.setAttribute('style',hs);
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
		this._magnifyingglass__text.setAttribute('style',hs);
		this._magnifyingglass.ggTextDiv.innerHTML="<b>Magnifying Glass<\/b><br> This could be used to read detailed maps.<p><b>Chwyddwydr<\/b><br>Gellid defnyddio hwn i ddarllen mapiau manwl.<\/p>";
		this._magnifyingglass.appendChild(this._magnifyingglass__text);
		this._magnifyingglass.onclick=function () {
			flag=(me._magnifyingglass.style.visibility=='hidden');
			me._magnifyingglass.style[domTransition]='none';
			me._magnifyingglass.style.visibility=flag?'inherit':'hidden';
			me._magnifyingglass.ggVisible=flag;
		}
		this.divSkin.appendChild(this._magnifyingglass);
		this._bunk=document.createElement('div');
		this._bunk__text=document.createElement('div');
		this._bunk.className='ggskin ggskin_textdiv';
		this._bunk.ggTextDiv=this._bunk__text;
		this._bunk.ggId="Bunk";
		this._bunk.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._bunk.ggVisible=false;
		this._bunk.className='ggskin ggskin_text';
		this._bunk.ggType='text';
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  78px;';
		hs+='width: 293px;';
		hs+='height: 159px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._bunk.setAttribute('style',hs);
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
		this._bunk__text.setAttribute('style',hs);
		this._bunk.ggTextDiv.innerHTML="<b>Bunk Bed<\/b><br>This is an officers dugout, and even they only had basic chicken wire mattresses covered with blankets.<p><b>Gwely Bync<\/b><br>Dyma gloddfa\u2019r swyddogion, ac hyd yn oed yma, dim ond matres gwifren ieir wedi ei orchuddio gan flanced oedd ganddynt.<\/p>";
		this._bunk.appendChild(this._bunk__text);
		this._bunk.onclick=function () {
			flag=(me._bunk.style.visibility=='hidden');
			me._bunk.style[domTransition]='none';
			me._bunk.style.visibility=flag?'inherit':'hidden';
			me._bunk.ggVisible=flag;
		}
		this.divSkin.appendChild(this._bunk);
		this._trench_1=document.createElement('div');
		this._trench_1__text=document.createElement('div');
		this._trench_1.className='ggskin ggskin_textdiv';
		this._trench_1.ggTextDiv=this._trench_1__text;
		this._trench_1.ggId="Trench_1";
		this._trench_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._trench_1.ggVisible=true;
		this._trench_1.className='ggskin ggskin_text';
		this._trench_1.ggType='text';
		this._trench_1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-39 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-107 + h) + 'px';
			}
			this.ggTextDiv.style.left=Math.floor(0 + (29-this.ggTextDiv.offsetWidth)) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -39px;';
		hs+='top:  -107px;';
		hs+='width: 21px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 100% 50%;';
		hs+='visibility: inherit;';
		this._trench_1.setAttribute('style',hs);
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
		this._trench_1__text.setAttribute('style',hs);
		this._trench_1.ggTextDiv.innerHTML="Trench\/Ffos";
		this._trench_1.appendChild(this._trench_1__text);
		this._trench_1.onclick=function () {
			me.player.openNext("{node2}","");
		}
		this.divSkin.appendChild(this._trench_1);
		this._trench_2=document.createElement('div');
		this._trench_2__text=document.createElement('div');
		this._trench_2.className='ggskin ggskin_textdiv';
		this._trench_2.ggTextDiv=this._trench_2__text;
		this._trench_2.ggId="Trench_2";
		this._trench_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._trench_2.ggVisible=true;
		this._trench_2.className='ggskin ggskin_text';
		this._trench_2.ggType='text';
		this._trench_2.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-39 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-74 + h) + 'px';
			}
			this.ggTextDiv.style.left=Math.floor(0 + (29-this.ggTextDiv.offsetWidth)) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -39px;';
		hs+='top:  -74px;';
		hs+='width: 21px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 100% 50%;';
		hs+='visibility: inherit;';
		this._trench_2.setAttribute('style',hs);
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
		this._trench_2__text.setAttribute('style',hs);
		this._trench_2.ggTextDiv.innerHTML="Dugout\/Cloddfa";
		this._trench_2.appendChild(this._trench_2__text);
		this._trench_2.onclick=function () {
			me.player.openNext("{node3}","");
		}
		this.divSkin.appendChild(this._trench_2);
		this._trench_3=document.createElement('div');
		this._trench_3__text=document.createElement('div');
		this._trench_3.className='ggskin ggskin_textdiv';
		this._trench_3.ggTextDiv=this._trench_3__text;
		this._trench_3.ggId="Trench_3";
		this._trench_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._trench_3.ggVisible=true;
		this._trench_3.className='ggskin ggskin_text';
		this._trench_3.ggType='text';
		this._trench_3.ggUpdatePosition=function() {
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
		this._trench_3.setAttribute('style',hs);
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
		this._trench_3__text.setAttribute('style',hs);
		this._trench_3.ggTextDiv.innerHTML="Firestep\/Gris Tanio";
		this._trench_3.appendChild(this._trench_3__text);
		this._trench_3.onclick=function () {
			me.player.openNext("{node1}","");
		}
		this.divSkin.appendChild(this._trench_3);
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
		if (id=='SoldiersKit') {
			me._soldierskit.onclick();
		}
		if (id=='Flares') {
			me._flares.onclick();
		}
		if (id=='Wirecutters') {
			me._wirecutters.onclick();
		}
		if (id=='Food') {
			me._food.onclick();
		}
		if (id=='Cooker') {
			me._cooker.onclick();
		}
		if (id=='WaterCan') {
			me._watercan.onclick();
		}
		if (id=='Dugout') {
			me._dugout.onclick();
		}
		if (id=='Handgrenade') {
			me._handgrenade.onclick();
		}
		if (id=='GasAlarm') {
			me._gasalarm.onclick();
		}
		if (id=='Ammunition') {
			me._ammunition.onclick();
		}
		if (id=='Rifle') {
			me._rifle.onclick();
		}
		if (id=='Rum') {
			me._rum.onclick();
		}
		if (id=='Tobacco') {
			me._tobacco.onclick();
		}
		if (id=='MagnifyingGlass') {
			me._magnifyingglass.onclick();
		}
		if (id=='Bunk') {
			me._bunk.onclick();
		}
		if (id=='Trench_1') {
			me._trench_1.onclick();
		}
		if (id=='Trench_2') {
			me._trench_2.onclick();
		}
		if (id=='Box5') {
			me._trench_3.onclick();
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