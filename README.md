# About Tindog Project

https://tindog-best-dogs.netlify.app/

> Tindogs which they can do many things, and they have several skills

1. By clicking **_X_** icon you will vote it *Nope*
2. By clicking **_Heart_** icon you will vote it *Like*


### Teddy, 30

![Teddy image](./images/Teddy.png)



### Rex, 25 

+ Art. Literature. Natural wine. Yoga


![Rex image](./images/Rex.png)
![Rex with heart](/images/Rex-with-heart.png)


### Bella, 43


![Bella image](./images/bella.png)
![Bella image with nope](./images/bella-with-nope.png)

-----

## Cloning the project 🪛🔨

```
# Clone this repository
$ git clone https://github.com/MastooraTurkmen/Tindog-project.git

# Go inside the repository
$ cd Tindog-project
```

-----

## Languages and Tools are used 🗣️ 🔧

1. **Languages** 🗣️
    + [HTML](https://github.com/topics/html)
    + [HTML5](https://github.com/topics/html5)
    + [CSS](https://github.com/topics/css)
    + [CSS3](https://github.com/topics/css3)
    + [JavaScript](https://github.com/topics/javascript)

2. **Tools** 🔧
    + [Chrome](https://github.com/topics/chrome)
    + [VSCode](https://github.com/topics/vscode)
    + [Figma](https://github.com/topics/figma)
    + [Netlify](https://github.com/topics/netlify)


-----

## Deployment📥

1. How to deploy our project to the Netlify site?
2. I use [Netlify App](https://app.netlify.com/) for deploying my projects.
3. Go to the Netlify site and select Add a new site.
4. From there select **_Deploy with Github_**.
5. Then write your project name and select it.
6. After selecting here you can see that the project **_Review configuration for Tindog-project_** and then select the **_Deploy Tindog-project_** Button.
7. Now your project is Live.


-----


## Author 👩🏻‍💻 

**Mastoora Turkmen**  
[LinkedIn](https://www.linkedin.com/in/mastoora-turkmen/) 
<br>
[Github](https://github.com/MastooraTurkmen/) 
<br>
[Twitter](https://twitter.com/MastooraJ22)


------


# Codes that are used

***1. Index HTML***
***2. Index CSS***
***3. Index JS***
  + ***Dog JS***
  + ***Data JS***


## Index HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/svg+xml" href="./images/logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css">
    <link rel="stylesheet" href="index.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <title>TinDogs</title>
</head> 
<body>
    <header>
        <div class="icons">
            <img src="images/icon-profile.png" class="small-icon">
            <img src="images/logo.png" class="small-icon logo-icon">
            <img src="images/icon-chat.png" class="small-icon">
        </div>
    </header>
    
    <section>
        <div class="main" id="main">
        </div>
    </section>
    
    <section class="button">
        <button class="liked-btn" id="liked-btn"><img src="images/icon-cross.png"></button>
        <button class="Nope-btn" id="Nope-btn"><img src="images/icon-heart.png"></button>
    </section>
    
        <script src="/index.js" type="module"></script>
</body>
</html>
```

