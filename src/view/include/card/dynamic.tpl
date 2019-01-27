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
                <div class="picture{% if  img.img_height / img.img_width > 1.6 %} long{% endif %}"
                     style="
                     {% if  img.img_height / img.img_width > 1.6 %}
                             width: {{ img.img_width * 128 / img.img_height }}px;
                         {% else %}
                                 width: {{ img.img_width * 128 / img.img_height }}px;
                     {% endif %}
                             flex-grow:{{ img.img_width * 128 / img.img_height }};
                             ">
                    <img src="{{ img.img_src }}" alt="">
                </div>
            {% endfor %}
        </div>
    </div>
</div>