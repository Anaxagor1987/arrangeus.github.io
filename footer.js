(function () {
    const footerHTML = `
    <footer class="border-t border-white/5 bg-black/30 py-12">
        <div class="container mx-auto px-6">

            <!-- Top row: brand left, columns right -->
            <div class="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-10 mb-10">

                <!-- Brand -->
                <div class="flex flex-col items-center gap-2 text-center">
                    <img src="/header_logo.png" alt="ArrangeUs" class="h-10 w-auto">
                    <p class="text-slate-500 text-sm">Best friend of every choreographer</p>
                </div>

                <!-- Right columns -->
                <div class="flex gap-16">

                    <!-- Legal -->
                    <div class="flex flex-col gap-4">
                        <p class="text-xs font-semibold uppercase tracking-widest text-slate-500">Legal</p>
                        <a href="/privacy-policy.html" class="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
                        <a href="/terms-of-use.html" class="text-sm text-slate-400 hover:text-white transition-colors">Terms of Use</a>
                    </div>

                    <!-- Follow Us -->
                    <div class="flex flex-col gap-4">
                        <p class="text-xs font-semibold uppercase tracking-widest text-slate-500">Follow Us</p>
                        <!-- EDIT: Replace # with your Instagram profile URL -->
                        <a href="#" target="_blank" aria-label="Instagram"
                            class="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                            <span class="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 hover:border-white/30 transition-colors flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.013 7.053.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.053.013 8.333 0 8.741 0 12c0 3.259.013 3.667.072 4.947.085 1.856.601 3.698 1.942 5.039 1.341 1.341 3.183 1.857 5.039 1.942C8.333 23.987 8.741 24 12 24s3.667-.013 4.947-.072c1.856-.085 3.698-.601 5.039-1.942 1.341-1.341 1.857-3.183 1.942-5.039.059-1.28.072-1.688.072-4.947 0-3.259-.013-3.667-.072-4.947-.085-1.856-.601-3.698-1.942-5.039C20.645.673 18.803.157 16.947.072 15.667.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                                </svg>
                            </span>
                            <span class="text-sm">Instagram</span>
                        </a>
                        <!-- EDIT: Replace # with your TikTok profile URL -->
                        <a href="#" target="_blank" aria-label="TikTok"
                            class="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                            <span class="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 hover:border-white/30 transition-colors flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                                </svg>
                            </span>
                            <span class="text-sm">TikTok</span>
                        </a>
                    </div>

                </div>
            </div>

            <!-- Divider + copyright -->
            <div class="border-t border-white/5 pt-6 text-center">
                <p class="text-slate-500 text-sm">© 2024 ArrangeUs. All rights reserved.</p>
            </div>

        </div>
    </footer>`;

    function inject() {
        document.querySelectorAll('site-footer').forEach(function (el) {
            el.outerHTML = footerHTML;
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', inject);
    } else {
        inject();
    }
})();
