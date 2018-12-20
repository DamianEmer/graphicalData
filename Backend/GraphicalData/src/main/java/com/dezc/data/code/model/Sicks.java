package com.dezc.data.code.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Sicks {
	
	@Id
	private String region;
	private Integer samples_received;
	private Integer sample_testable;
	private Integer samples_tested;
	private Integer samples_in_progress;
	
	protected Sicks () {
		
	}
	
	protected Sicks ( String region, int s_received, int s_testable, int s_tested, int s_progress) {
		this.region = region;
		this.samples_received = s_received;
		this.sample_testable = s_testable;
		this.samples_tested = s_tested;
		this.samples_in_progress = s_progress;
	}

	public String getRegion() {
		return region;
	}

	public Integer getSamples_received() {
		return samples_received;
	}

	public Integer getSample_testable() {
		return sample_testable;
	}

	public Integer getSamples_tested() {
		return samples_tested;
	}

	public Integer getSamples_in_progress() {
		return samples_in_progress;
	}

	public void setRegion(String region) {
		this.region = region;
	}

	public void setSamples_received(Integer samples_received) {
		this.samples_received = samples_received;
	}

	public void setSample_testable(Integer sample_testable) {
		this.sample_testable = sample_testable;
	}

	public void setSamples_tested(Integer samples_tested) {
		this.samples_tested = samples_tested;
	}

	public void setSamples_in_progress(Integer samples_in_progress) {
		this.samples_in_progress = samples_in_progress;
	}

	
	
	
}
