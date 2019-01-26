<div class="card dynamic">
    <header>
        <a class="up" href="/space/{{ desc.uid }}/">
            <img src="{{ desc.user_profile.info.face }}" alt="{{ desc.user_profile.info.uname }}">
        </a>
        <div class="info">
            <a class="name" href="/space/{{ desc.uid }}/">{{ desc.user_profile.info.uname }}</a>
            <small class="desc">发表于{{ create }}</small>
        </div>
    </header>
    <div class="content">
        <div class="text">
            {% for line in translateWrap(card.item.description) %}
                <p>{{ line }}</p>
            {% endfor %}
        </div>
        <div class="pictures">
            {% for img in card.item.pictures %}
                <div class="picture"
                     style="width:{{ img.img_width * 256 / img.img_height }}px;flex-grow:{{ img.img_width * 256 / img.img_height }}">
                    <i style="padding-bottom:{{ img.img_height / img.img_width * 100 }}%"></i>
                    <img src="{{ img.img_src }}" alt="">
                </div>
            {% endfor %}
        </div>
    </div>
</div>