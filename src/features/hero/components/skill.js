export function skill(img) {
    return `
        <div class="size-18 rounded-full grid place-items-center relative overflow-hidden lg:size-16">
            <div class="absolute bg-hacker-border inset-[-50%] animate-hacker-spin flex justify-center items-center skill">
            </div>
            <div class="size-16 bg-black-bluish rounded-full relative z-1 rotate-none grid place-items-center lg:size-14 skill__bar">
                <img src="${img}" class="size-10 sm:size-8"/>
            </div>
        </div>
    `;
}