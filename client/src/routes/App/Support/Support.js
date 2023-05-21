import AppLanding from '../layouts/AppLanding/AppLanding';

import './Support.scoped.scss';

function Support() {
  return (
    <AppLanding
      title="Support Blaze"
      subtitle="Few ways you can support the project"
    >
      <div className="support">
        <h2 class="section-title sponsor-title">
          <img src="https://github.com/blenderskool.png?size=100" />
          Sponsor me!
        </h2>

        <p>
          Hey,We started building Blaze to make
          file sharing easy.
        </p>

      </div>
    </AppLanding>
  );
}

export default Support;
