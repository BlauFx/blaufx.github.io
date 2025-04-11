<script lang="ts">
    import { base } from '$app/paths';

    import Background from "./Background.svelte";
    import Text from "./Text.svelte";
    import SocialMedia from "./SocialMedia.svelte";


    let name = "";
    let num = name.length;
    let textToDisplay = name;
    let increment = false;

    const writer = setInterval(changeName, 350);

    function changeName() {
        /*if (increment == true) {
            if (textToDisplay.length == name.length - 1)
                clearInterval(writer);
            textToDisplay += name[num];
            num++;
        }
        else
        {
            if (textToDisplay.length == 1)
                increment = true;
            textToDisplay = textToDisplay.slice(0, -1);
            num--;
        }*/
    }
</script>

<svelte:window on:load|once={() => writer}></svelte:window>


<!-- <img alt="BlauFx's logo" src="1-sw.png" />-->

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<br>
<div class="top-container">
    <div class="child-container">
       <div class="ProfilePicture">
       </div>
       <h1>
          <div id="b-wrapper">
             <div class="jello-horizontal HelloText">Welcome to my page{textToDisplay}!</div>
          </div>
       </h1>
    </div>
    <p id="text">
        <Text />
    </p>
        <SocialMedia />
</div>

<button class="btn" id="loginBtn">Login</button>
<Background />

<style>

    body {
    background-color: #323232;
    color: #ebf1ff;
    text-align: center;
    overflow-y: auto;
    }

.top-container {
    display: flex;
    flex-direction: column;
}

.container {
	display: flex;
	flex-direction: column;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}


.btn {
    position: fixed;
    bottom: 0px;
    right: 0px;
    margin: 10px;

    bottom: 0;
    right: 0;

    background-color: #212121;
    color:  #848484;

    border: 3px solid #848484;
    height: 35px;
    width: 120px;

    -webkit-border-radius: 2px;
    -webkit-border-radius: 3px;

    border: 3px solid #848484;
    border-radius: 3px;

    transition: width 2s, height 2s, transform 2s;
    transform: rotate(0deg);
    transition-delay: ßs;
}

.btn:hover {
    color:  #FFFFFF;

    /*cool animation*/
    height: 70px;
    width: 240px;
    transform: rotate(360deg);
    transition-delay: 0.5s;
}

.btn:focus {
    box-shadow: 0 0 3pt 2pt #a5fbff;
    border-radius: 3px 3px 3px 3px;
    outline: none;
}

.stable {
    background-color: #2a2;
    box-shadow: 0 0 10px #2a2;
}

.testing {
  width: 100%;
  height: 1em;
  display: inline-block;
  animation: bar-blink 2s 1.5s ease-in-out infinite;
}

@keyframes bar-blink {
    30% {
        filter: brightness(70%);
    }
    50% {
        filter: brightness(200%);
        }
    100% {
        filter: brightness(100%);
    }
}

.ProfilePicture {
    background-image: url("/1-sw.webp");
    position: relative;
    flex-wrap: nowrap;
    -webkit-border-radius: 10%;
    -moz-border-radius: 10%;
    -ms-border-radius: 10%;
    -o-border-radius: 10%;
    border-radius: 10%;  
    padding: 7em;
    background-position: 50%;
    background-repeat: no-repeat; 
    margin: center;
    background-size: cover;/*100% 100%;*/
    align-self: center;
}

.ProfilePicture:hover {
    filter:  blur(2px);
}

p {
    font-family: AvenirLTStd-Book;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    float: left;
    padding-left: 15%;
    padding-right: 10%;
}

.text
{
    float: left;
    position: relative;
    left: -50%;
}

.child-container {
    flex-wrap: wrap;
    flex-direction:  column;
    align-content: center;
    justify-content: center;
    display: flex;
    margin-top: 5%;
}

b {
	color : #FFF;
	margin: auto;
	transition: 3s;
}

#b-wrapper {
    display: flex;

    margin: auto;
    transition: 5s;

    -webkit-animation: fadeInOut 10s;
    animation-iteration-count: 1;   
}

.HelloText:hover {
	animation-duration: 10s;
	animation-name: rainbow;
	animation-iteration-count: infinite;
	letter-spacing: 0.2em;
	transition: 1.5s;
	text-align: center;
	text-indent: 0.2em;
}


.jello-horizontal {
	/*-webkit-animation: jello-horizontal 0.9s both;*/
	        animation: jello-horizontal 0.9s both;
            animation-iteration-count: 1;
            transition: 1s;
}

@keyframes fadeInOut {
	0% {
        opacity: 0;
    }

    40% {
       opacity: 1;
    }

    80% {
       opacity: 1;
    }
    100% {
       opacity: 0;
    }
}

@keyframes rainbow {
		100%,0%{
			color: rgb(255,0,0);
		}
		8%{
			color: rgb(255,127,0);
		}
		16%{
			color: rgb(255,255,0);
		}
		25%{
			color: rgb(127,255,0);
		}
		33%{
			color: rgb(0,255,0);
		}
		41%{
			color: rgb(0,255,127);
		}
		50%{
			color: rgb(0,255,255);
		}
		58%{
			color: rgb(0,127,255);
		}
		66%{
			color: rgb(0,0,255);
		}
		75%{
			color: rgb(127,0,255);
		}
		83%{
			color: rgb(255,0,255);
		}
		91%{
			color: rgb(255,0,127);
		}
}

/* ----------------------------------------------
 * Generated by Animista on 2021-5-29 17:51:34
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation jello-horizontal
 * ----------------------------------------
 */
@-webkit-keyframes jello-horizontal {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
            transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
            transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
}
@keyframes jello-horizontal {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
            transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
            transform: scale3d(1.05, 0.95, 1);
  }
  99% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
}

</style>
