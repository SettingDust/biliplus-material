<div class="card feed">
    <a href="/av{{ addition.aid }}" target="_blank">
        <div class="cover">
            <img src="{{ addition.pic }}" alt="{{ addition.description }}">
        </div>
    </a>
    <div class="content">
        <a href="/av{{ addition.aid }}" class="title" target="_blank"><h4>{{ addition.description }}</h4></a>
        <p class="desc">
            <small>{{ source.title }}</small>
            <small class="date">更新于{{ create }}</small>
        </p>
    </div>
</div>