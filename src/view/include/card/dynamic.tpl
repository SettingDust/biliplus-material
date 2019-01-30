<div class="card dynamic" data-id="{{ desc.dynamic_id_str }}">
    <header>
        <a class="up" href="/space/{{ desc.uid }}/" target="_blank">
            <img src="{{ desc.user_profile.info.face }}" alt="{{ desc.user_profile.info.uname }}">
        </a>
        <div class="info">
            <a class="name" href="/space/{{ desc.uid }}/" target="_blank">{{ desc.user_profile.info.uname }}</a>
            <small class="desc">发表于{{ create }}</small>
        </div>
        <div class="flex-space"></div>
        <button class="open btn circle">
            <i class="material-icons">open_in_new</i>
        </button>
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
                             width: {{ img.img_width * 128 / img.img_height }}px;
                             flex-grow:{{ img.img_width * 128 / img.img_height }};
                             ">
                    <img src="{{ img.img_src }}{{ '@450w' if img.img_width > 450 }}" alt=""
                         data-width="{{ img.img_width }}" data-height="{{ img.img_height }}">
                </div>
            {% endfor %}
        </div>
    </div>
</div>